// pass user info and isLoggedIn as true to reducer
export function isUserLoggedIn(user) {
  return {
    type: 'IS_USER_LOGGED_IN',
    user: {
      isLoggedIn: true,
      _id: user._id,
      username: user.username,
    },
  };
};

// to log out, change info to blank and isLoggedIn to false
export function userLogOut() {
  return {
    type: 'USER_LOG_OUT',
    user: {
      isLoggedIn: false,
      _id: '',
      username: '',
    }
  }
}