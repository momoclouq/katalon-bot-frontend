# Katalon chatbot UI

## Deployment

[Current Katalon chatbot website](https://momoclouq.github.io/katalon-bot-frontend/)

## How to run the project locally
0. Run the backend, follow readme from the backend link
1. Clone this project
2. Run `npm install` to install all dependencies
3. Add .env file for local set up (the content can be found below)
4. Run `npm start`, the app will be served at localhost:3000

## .env file
```
REACT_APP_DOMAIN_SEARCH='https://h07ekz4o6a.execute-api.us-east-1.amazonaws.com/default/retrieveCompanyInvocation'
REACT_APP_FULL_PIPELINE='https://l3j9brkul3.execute-api.us-east-1.amazonaws.com/default/pipelineInvocation'
REACT_APP_DEFAULT_DOMAIN='3d517f8924ac7fd03699a29d97dc52d9'
```



