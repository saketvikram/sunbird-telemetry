val channelDf = spark.read.json("wasbs://telemetry-data-store@ntpstagingall.blob.core.windows.net/channel/*/raw/2019-01-22*.json.gz")

channelDf.dropDuplicates("mid").count()

channelDf.dropDuplicates("mid").groupBy("context.channel").count().show(100, false)

channelDf.dropDuplicates("mid").filter(col("ldata.state")==="" && col("context.did")=!="").groupBy("context.channel").count().show(100, false)

val uniqueDf = spark.read.json("wasbs://telemetry-data-store@ntpstagingall.blob.core.windows.net/unique/2019-01-22*.json.gz")

uniqueDf.dropDuplicates("mid").filter(col("eid")=!="LOG" && col("eid")=!="ERROR").groupBy("context.channel").count().show(100, false)
