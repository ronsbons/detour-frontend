export function isUserLoggedIn(user) {
  return {
    type: 'IS_USER_LOGGED_IN',
    user: {
      isLoggedIn: true,
      _id: user._id,
      username: user.username,
    }
  }
}