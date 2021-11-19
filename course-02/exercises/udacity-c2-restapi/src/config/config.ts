export const config = {
  "dev": {
    "username": "postgres",
    "password": "postgres",
    "database": "udagram",
    "host": "localhost",
    "dialect": "postgres",
    "aws_region": "us-east-1",
    "aws_profile": "unknown-profile",
    "aws_media_bucket": "stefan-udacity-dump"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
	"jwt":{
		"secret": "helloworld"
	}
}
