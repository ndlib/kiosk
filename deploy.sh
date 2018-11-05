#!/bin/bash

if [ $1 = "--production" ]
then
  stage="prod"
  bucket="wse-web-kiosk-prod-library-nd-edu-230391840102"
else
  stage="prep"
  bucket="wse-web-kiosk-prep-library-nd-edu-333680067100"
fi

npm install
npm run build

cd ./public && aws s3 sync . s3://$bucket --delete --acl public-read
