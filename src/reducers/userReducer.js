const jwt = require('jsonwebtoken');

// get jwt token from localstorage
let userToken = localStorage.getItem('token');

// only verify token against secret key to access user payload if there is a token
let verified = '';
if (userToken) {
  // verified = jwt.verify(userToken, 'essendon');
  jwt.verify(userToken, 'essendon', (error, decoded) => {
    // if jwt is expired
    if (error) {
      error = {
        name: 'TokenExpiredError',
        message: 'jwt expired',
      };

      console.log(`jwt verify error; ${error}`);
      // remove token from localStorage, which will force defaultState to be isLoggedIn: false
      localStorage.removeItem('token');
    // if jwt is still valid,
    } else {
      // set variable to the payload
      verified = decoded;
    };
  });
};

// if there is a token in localStorage, set defaultState to loggedin true
const defaultState = userToken ? {
  isLoggedIn: true,
  _id: verified._id,
  username: verified.username,
} : {
  isLoggedIn: false,
  _id: '',
  username: '',
};
// if no token, then set empty default state

function userLoggedIn(state = defaultState, action) {
  switch(action.type) {
    // if action type is is_user_logged_in,
    case 'IS_USER_LOGGED_IN':
      // define new state with user info
      const loggedInState = {
        isLoggedIn: action.user.isLoggedIn,
        _id: action.user._id,
        username: action.user.username,
      };

      console.log(`logged in user: ${loggedInState.username}`);
      return loggedInState;
    // if action type is logout,
    case 'USER_LOG_OUT':
      // define new state with cleared user info
      const loggedOutState = {
        isLoggedIn: false,
        _id: '',
        username: '',
      };

      return loggedOutState;    
    default:
      return state;
  };
};

export default userLoggedIn;