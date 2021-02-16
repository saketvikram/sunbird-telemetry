// calculate sessions with missing start events and sessions present yesterday

val tel = spark.read.format("json").load("/Users/saket/Documents/diksha-prod-telemetry/30-Oct/*")
val mobdata = tel.filter(col("context.pdata.id") === "prod.diksha.app")
println("Number of diksha events for mobile:" + mobdata.count)
val startevent = mobdata.filter(col("eid") === "START" && col("actor.type") === "User" && col("context.env") === "home")
println("Number of diksha mobile events with start event:" + startevent.count)
val overallsid = mobdata.select("context.sid").map{ x => x(0).toString() }.toDF("allsid").distinct
println("Number of distinct sessions :" + overallsid.count)
val starteventsid = startevent.select("context.sid").map{ x => x(0).toString() }.toDF("startsid").distinct
println("Number of distinct sessions with start event:" + starteventsid.count)
val diff_day = overallsid.except(starteventsid)
println("Number of diksha sessions missing start event:" + diff_day.count)
// diff_day.collect.foreach(println)
val telbef = spark.read.format("json").load("/Users/saket/Documents/diksha-prod-telemetry/29-Oct/*")
val mobdatabef = telbef.filter(col("context.pdata.id") === "prod.diksha.app")
val overallsidbef = mobdatabef.select("context.sid").map{ x => x(0).toString() }.toDF("allsidbef").distinct
 val joinDF = starteventsid.join(overallsidbef, starteventsid.col("startsid") === overallsidbef.col("allsidbef"))
println("Common Sesssion ids for today and yesterday: "+joinDF.count)
val joinDFfin = diff_day.join(overallsidbef, diff_day.col("allsid") === overallsidbef.col("allsidbef"))
println("Common Sesssion ids for today which do not have start events today  and yesterday session ids: "+joinDFfin.count)