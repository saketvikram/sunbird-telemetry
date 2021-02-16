cd az-data
azcopy  --source https://ntpproductionall.blob.core.windows.net/telemetry-data-store/raw --destination ~/AnalysisTel/comaparison/ --recursive --include "2018-09-16"
cd ../aws-data
aws s3 cp s3://ekstep-prod-data-store/raw/ . --recursive --exclude "*" --include "2018-08-14*"
