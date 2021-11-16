export const config = {
  "dev": {
    "username": "postgres",
    "password": "stefan",
    "database": "cars",
    "host": "localhost",
    "dialect": "postgres",
    "aws_region": "us-east-1",
    "aws_profile": "stefan-dev",
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
