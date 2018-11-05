
if [ $1 = "--production" ]
then
  cloudfrontid="E1LPKIGSNLDTX7"
else
  cloudfrontid="E3OFMZUXRH6DGH"
fi

if [ $cloudfrontid = "E1LPKIGSNLDTX7" ] && [ ! $AWS_VAULT = "prod-invalidator" ]
then
  printf "${RED}For production deploys you must assume the prod-invalidator role ${NC} \n"
  exit
fi

if [ $cloudfrontid = "E3OFMZUXRH6DGH" ] && [ ! $AWS_VAULT = "testlib" ]
then
  printf "${RED}For testlib deploys you must assume the testlibnd role ${NC} \n"
  exit
fi


aws cloudfront create-invalidation --distribution-id $cloudfrontid --paths "/*"
