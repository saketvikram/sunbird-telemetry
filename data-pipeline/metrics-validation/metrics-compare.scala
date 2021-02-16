// Unique devices count for aws
val tel = spark.read.format("json").load("/home/spark/dikshaMigration/aws-16-Sep/*.json")
val awsapp = tel.filter(!(col("eid").isin("LOG")) && col("context.pdata.id") === "prod.diksha.app")
val awsdid = awsapp.filter(col("context.did").isNotNull)
awsdid.select(countDistinct("context.did")).show()

// Unique device count for azure
val telaz = spark.read.format("json").load("/home/spark/dikshaMigration/az-16-Sep/16-sep/*.json")
val azsapp = telaz.filter(!(col("eid").isin("LOG")) && col("context.pdata.id") === "prod.diksha.app")
val azsdid = azsapp.filter(col("context.did").isNotNull)
azdid.select(countDistinct("context.did")).show()

// total downloads for aws data
awsapp.filter(col("edata.subtype") === "ContentDownload-Success").count()

// total downloads for azure data
azsapp.filter(col("edata.subtype") === "ContentDownload-Success").count()


