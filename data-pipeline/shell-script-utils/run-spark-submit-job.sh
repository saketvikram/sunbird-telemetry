sbt package
spark-submit --class "SimpleApp" --driver-memory 6G --executor-memory 5G --master local[4] target/scala-2.11/simple-project_2.11-1.0.jar
