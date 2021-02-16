import org.ekstep.analytics.framework._
import org.apache.commons.lang3.StringUtils
import org.ekstep.analytics.framework.util._
import org.apache.spark.SparkContext
import org.joda.time._

// CommonUtil.setAzureConf(sc)
CommonUtil.setS3Conf(sc);
val queries1 = Option(Array(Query(Option("ekstep-prod-data-store"), Option("raw/"), Option("2018-08-11"), Option("2018-09-16"))))
implicit val sparkContext: SparkContext = sc

val azureDf = spark.read.json("wasbs://telemetry-data-store@ntpproductionall.blob.core.windows.net/unique/2018-09-15*")

val ekstepRDD = DataFetcher.fetchBatchData[V3Event](Fetcher("s3", None, queries1)).filter{x => !StringUtils.equals("LOG",x.eid) && x.context.pdata.get.id.contains("diksha")}


val dikshaRDD = azureDf.filter(!(col("eid").isin("LOG")) && col("context.pdata.id").contains("diksha"))


val ekstepMidDF = ekstepRDD.map{x => x.mid }.toDF("eMID")
val dikshaMidDF = dikshaRDD.select("mid").map{ x => x(0).toString() }.toDF("dMID").distinct

val joinDF = dikshaMidDF.except(ekstepMidDF)
println("Missed Events in Diksha And Ekstep: "+joinDF.count)
