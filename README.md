# kiosk

## Deployment

Assume a role for the env you want to deploy to.

./deploy.sh [ --production ]

## Invalidate the cloudfront

Assume the role for the env Note prod has its own invalidation role.
./deploy-invalidation.sh [ --production ]
