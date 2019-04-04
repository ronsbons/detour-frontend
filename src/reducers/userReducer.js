// default state is an empty form
const defaultState = {
  isLoggedIn: false,
  _id: '',
  username: '',
};

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