 val ekstepDF = spark.read.json("/home/spark/AnalysisTel/DikshaMigration/ekstep/30-aug/*.json")
val dikshaDF = spark.read.json("/home/spark/AnalysisTel/DikshaMigration/dikshadata/30-aug/*.json")
val ekstepDFFiltered = ekstepDF.filter(!(col("eid").isin("LOG")) && col("context.pdata.id").contains("diksha"))
val dikshaDFFiltered = dikshaDF.filter(!(col("eid").isin("LOG")) && col("context.pdata.id").contains("diksha"))
val ekstepDFLogs = ekstepDF.filter((col("eid").isin("LOG")) && col("context.pdata.id").contains("diksha"))
 val dikshaDFLogs = dikshaDF.filter((col("eid").isin("LOG")) && col("context.pdata.id").contains("diksha"))


val ekstepMidDF = ekstepDFFiltered.select("mid").map{ x => x(0).toString() }.toDF("eMID").distinct
val dikshaMidDF = dikshaDFFiltered.select("mid").map{ x => x(0).toString() }.toDF("dMID").distinct

 val joinDF = dikshaMidDF.join(ekstepMidDF, dikshaMidDF.col("dMID") === ekstepMidDF.col("eMID"))


println("Common Events in Diksha And Ekstep: "+joinDF.count)

println("Events Count in Diksha except LOG: "+dikshaDFFiltered.count)
println("Events Count in Ekstep except LOG: "+ekstepDFFiltered.count)

 println("Log Events in Diksha: "+dikshaDFLogs.count)
 println("Log Events in Ekstep: "+ekstepDFLogs.count)

