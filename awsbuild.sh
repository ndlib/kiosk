#!/bin/bash
PROJECT=kiosk
BUCKET=${PROJECT}.library.nd.edu

cd ./deploy

aws s3 mb s3://${BUCKET}
aws s3 website s3://${BUCKET} --index-document index.html --error-document index.html
aws s3 sync . s3://${BUCKET} --exclude '.*' --exclude '*.md' --exclude '*.json' --delete --acl public-read

echo ${BUCKET}.s3-website-us-east-1.amazonaws.com
