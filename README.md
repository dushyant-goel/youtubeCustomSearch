# Getting Started 

This project was built with React JS library.\
You need `node v10+` and `npm v5+` on your machine to run it.\
(Docker file coming soon..)

This project uses the YouTube Data API.\
You will need your own API key for YouTube Data App v3 to run this project.\
Read how to generate an API key [here](https://developers.google.com/youtube/registering_an_application)

# Install 
Go to the project directory, and run 

`npm install`

This will download all the dependencies on your system.

# Set API key in environment
You will need an  API key to run this. 

`touch .env`
`echo [YOUR_API_KEY] | cat > .env`

If you want to build further on this project, remember to add .env to
.gitignore

`echo '.env' | cat >> .gitignore`

# Start the server

To start the server type
`npm start`

This runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

# testing

`npm test`

Launches the test runner in the interactive watch mode.
See [running tests](https://facebook.github.io/create-react-app/docs/running-tests)\

# prouduction
`npm run build`

Builds the app for production to the `build` folder. 
