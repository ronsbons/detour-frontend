const jwt = require('jsonwebtoken');

// get jwt token from localstorage
let userToken = localStorage.getItem('token');
console.log(`userToken: ${userToken}`);
// verify token against secret key to access user payload
let verified = jwt.verify(userToken, 'essendon');
console.log(`verified: ${verified}`);

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
    case 'IS_USER_LOGGED_IN':
      const loggedInState = {
        isLoggedIn: action.user.isLoggedIn,
        _id: action.user._id,
        username: action.user.username,
      };

      console.log(`logged in user: ${loggedInState.username}`);
      return loggedInState;
    
      default:
        return state;
  };
};

export default userLoggedIn;