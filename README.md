# ![](public/images/DeTour-logo.png)
# DeTour
<img src="https://github.com/ronsbons/detour-frontend/blob/master/public/images/Screen%20Shot%202019-04-11%20at%2010.08.52%20AM.png" alt="DeTour landing page" width="700px">

## Overview
[DeTour](http://protected-ravine-34035.herokuapp.com/) is a website where young travelers can compare tour offerings from the top companies offering group travel for 18-35 year olds.  Users can view tours by country and see a side-by-side of key information like which countries are visited and starting costs.  Users can choose to create an account to leave reviews sharing their experiences from a particular tour and to save tours they're interested in to view later.

## Technologies Used
Languages
- HTML
- CSS
- Sass
- JavaScript

Frameworks
- Bulma.css

Libraries
- React.js
- Redux

Packages
- axios
- bulma
- jsonwebtoken
- node-sass
- react-router-dom
- react-slick, slick-carousel
- redux-persist


## Installation
If you would like to run the whole application locally, the backend repo can be found [here](https://github.com/ronsbons/detour-backend).  Please install it before installing this frontend repo.

To connect to your local database and server, the axios call endpoints in `CountryModel.js`, `ReviewModel.js`, `TourModel.js`, and `UserModel.js` will need to be changed to your local server's address (ex. `http://localhost:3001`).

You can alternatively run only the frontend locally, which will interact with the existing backend hosted on Heroku.

Clone this repo down, and first install its dependencies.
`npm install`

You can then run `npm start` and see the working DeTour app on [http://localhost:3000](http://localhost:3000).

### Packages
For styling, the Bulma.css framework has been installed as a package, and all modules have been kept should any of them be needed in future refactoring.  The node-sass package has also been installed to utilize Sass to customize Bulma's default styles.  If you make changes in any Sass files, run `npm run css-watch` to compile changes to the `index.css` file.


## User Stories and Wireframes
User stories and wireframes can be found at this project's [Trello board](https://trello.com/b/hLycGwWy/capstone-project).


## Unsolved Problems
- Broswer history

Currently, the URL for the region and country container components remain the same at "/region" and "/country" no matter what information is dynamically populated into the component.  This prevents the user from successfully going back and forward through their browser's history.

- User security

A user's unique ID and username are stored in the Redux store and in some components' local state unencrypted.

- User-facing error handling

For example, upon user registration, if a user were to type a special character in their username that doesn't match the regex set in the backend, the sign up form will not submit, but there is no message saying why.

## Future Features
- Admin frontend to add/edit/delete additional countries and tours
- Improvements on responsive and accessible styling
- Image compression to improve page loading
- User authorization package, such as PassportJS
- Improved error handling and testing



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
