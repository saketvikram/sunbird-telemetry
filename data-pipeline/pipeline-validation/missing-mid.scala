// find the events in ekstep not in diksha
// ekstep.except(diksha)

// d1 filter for all diksha events for one day and one day prev:
// d2 filter for all ekstep events

// find the events in d2 but not in d1




val ekstepDF = spark.read.json("/home/spark/AnalysisTel/DikshaMigration/day-ekstep/26-aug/*.json")

val dikshaDF = spark.read.json("/home/spark/AnalysisTel/DikshaMigration/dikshadata/common-26/*.json")

val ekstepDFFiltered = ekstepDF.filter(!(col("eid").isin("LOG")) && col("context.pdata.id").contains("diksha"))
val dikshaDFFiltered = dikshaDF.filter(!(col("eid").isin("LOG")) && col("context.pdata.id").contains("diksha"))

val ekstepMidDF = ekstepDFFiltered.select("mid").map{ x => x(0).toString() }.toDF("eMID").distinct
val dikshaMidDF = dikshaDFFiltered.select("mid").map{ x => x(0).toString() }.toDF("dMID").distinct

val diff_day = ekstepMidDF.except(dikshaMidDF)


println("Number of Ekstep events missing in Diksha:" + diff_day.count)

 diff_day.collect.foreach(println)