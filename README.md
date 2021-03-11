# Live Build Deployment
https://vigilant-northcutt-f6c9da.netlify.app/

This app lets you search youtube videos in a custome time upload date.\
Want to search a video from the night of Dec 10, 2010.\
Want to see yesterday's sunrise from Japan. Well, set the time accordingly.\
Looking for Joe Biden's speech and not the news commentary published 2 hours later?
We got you covered.\
Set any date-time range and search on YouTube.

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
