# kiosk

## Deployment

Requires [hesdeploy](https://github.com/ndlib/hesburgh_utilities/blob/master/scripts/HESDEPLOY.md)

To do a full deploy from scratch (no infrastructure exists), just assume the AWS role in the account you want to deploy to
and run `hesdeploy` This will take quite a while, as it creates the cloudfront (at least 45min) and hesdeploy may time out while waiting, 
so you may want to `ctrl-c` out of the waiting text and, when the cloudformation is finished, run the deploy command below.

To do an update of just the website, assume the AWS role in the account you're deploying to and run
`hesdeploy --pre --post -s [stage]` This will only run the required steps to build and deploy the code.
