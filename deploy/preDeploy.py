from hesburgh import scriptutil, heslog
import json
import os

def getCert(domain):
  output = scriptutil.executeCommand("aws acm list-certificates --certificate-statuses ISSUED --includes extendedKeyUsage=TLS_WEB_SERVER_AUTHENTICATION --query 'CertificateSummaryList[?DomainName==`%s`]|[0]'" % domain)
  data = json.loads(output.get("output"))
  if data:
    return data.get("CertificateArn")
  return None


def generateEnv(stage):
  fqdn = "kiosk" if stage == "prod" else "kiosk-" + stage
  fqdn = "%s.library.nd.edu" % fqdn

  certArn = getCert(fqdn)
  if not certArn:
    certArn = getCert('*.library.nd.edu')

  return {
    "CERT_ARN": certArn,
    "FQDN": fqdn,
  }


def run(stage):
  heslog.info("Running npm")
  scriptutil.executeCommand("cd .. && npm install")

  heslog.warn("This project has no tests to run")

  return { "env": generateEnv(stage) }
