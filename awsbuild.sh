#!/bin/bash
PROJECT=kiosk
BUCKET=${PROJECT}.library.nd.edu

npm run build
cd ./public

#aws s3 mb s3://${BUCKET} --profile libnd-wse-admin
#aws s3 website s3://${BUCKET} --index-document index.html --error-document index.html --profile libnd-wse-admin
aws s3 sync . s3://${BUCKET} --exclude '.*' --exclude '*.md' --exclude '*.json' --delete --acl public-read --profile libnd-wse-admin

echo ${BUCKET}.s3-website-us-east-1.amazonaws.com
