# Example of a Lambda Function that interacts with DocumentDb

## Set the URI enviroment variable
This can be a AWS Document database or a local MongoDb

## Run Locally with MongoDb 
- docker run --name my-mongodb -d -p 27017:27017 mongo
- export URI=mongodb://127.0.0.1:27017
- npm install
- node invoke-handler.js

## Deploy to AWS Lambda
- npm install
- zip -r for-lambda.zip .
- Create a new Lambda Function
- Upload the Zip file
- Create security groups, for the Lambda and the DocumentDb
- Configure the Lambda to use the same VPC as our DocumentDb will be using and set the lambda new security group
- Create the DocumentDb and set the new docdb security group
- Copy the DocumentDb PEM file over to the Lambda Function
- Configure the Lambda environment variable with the URI of the DocumentDb
- Run the Lambda function 🎉
