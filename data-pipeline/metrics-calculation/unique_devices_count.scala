val tel = spark.read.format("json").load(("/Users/saket/Documents/diksha-prod-telemetry/29-Oct/*")
tel.filter(col("eid") === "START" && col("actor.type") === "User" && col("context.env") === "home").select(countDistinct("context.did")).show()
