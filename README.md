# Katalon chatbot UI

## Deployment

[Current Katalon chatbot website](https://momoclouq.github.io/katalon-bot-frontend/)

## How to run the project locally

1. Clone the project
2. Run `npm install` to install all dependencies
3. Add .env file for local set up (the content can be found below)
4. Run `npm start`, the app will be served at localhost:3000

## Data for .env (local set up):

```
#Add these lines to .env file
REACT_APP_TEST_VAR = 'Katalon'  
REACT_APP_SEMANTIC_SEARCH_URL = 'https://katalonsemanticsearch.com'  
REACT_APP_INTENT_RECOGNITION_URL = 'https://jzenkd2s01.execute-api.us-east-1.amazonaws.com/default/intentRecognitionInvocation'
```

## How to contribute as a team member

1. Create a branch from branch 'main' named with related features that will be implemented (example: personal_carousel)
2. After finished committing, create a pull request (PR) with meaningful name to merge into 'main' branch
3. resolve conversations, comments etc
4. Merge into 'main' branch after being approved by 1 other member


