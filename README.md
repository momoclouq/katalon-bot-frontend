# Katalon chatbot UI

## Deployment

[Current Katalon chatbot website](https://momoclouq.github.io/katalon-bot-frontend/)

## How to add the chatbot to the current webapp
The template HTML file is `testpage.html`, which can be found directly in the repo
1. Add the css file: `<link rel="stylesheet" href="https://d34xspf5ar41hj.cloudfront.net/main.3c3a2208.css" />`
2. Add the js file: `<script src="https://d34xspf5ar41hj.cloudfront.net/main.6fdc7cfe.js"></script>`
3. Add the element to store the chatbot, which is any element with the id 'katalonChatbot': `<div id="katalonChatbot"></div>`

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

## How to programmatically provide the initial user email:
The chatbot uses localStorage to manage the domain and the user email
- To add the email: set the value `userEmail` of localStorage to change the user email before the user has entered the email.
- Remember to `dispatchEvent(new Event('storage'))` after setting the email. Example is in the `testpage.html`. This is because the storage event does not trigger for the active tab.






