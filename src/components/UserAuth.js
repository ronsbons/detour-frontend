import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserModel from '../models/UserModel.js';

import { isUserLoggedIn } from '../actions/userActions.js';

class UserAuth extends Component {
  handleSignup = event => {
    console.log(event);
    event.preventDefault();

    let username = event.target[0].value;
    let email = event.target[1].value;
    let password = event.target[2].value;
    console.log(username, email, password);
    // store input in local state like project 2?
    UserModel.signUp(username, email, password)
      .then(response => {
        console.log(response.data);
        // store jwt in local storage token
        // [] can store jwt in store if i figure out redux-persist
        localStorage.token = response.signedJwt;

        // [] create an action that changes isLoggedIn to true
        // [] create an action that stores logged in user info (user._id, user.username)
        // { isUserLoggedIn(response.user)}
        this.props.isUserLoggedIn(response.data.user);
        debugger;

        // [] do i need the verify method?
      })
  }

  render() {
    return (
      <div className="columns">
        {/* Log in form */}
        <div className="column">
          <h4 className="subtitle is-4 has-text-centered">Log In</h4>
          <form>
            <input type="text" name="username" placeholder="username" />
            <input type="password" name="password" placeholder="password" />
            <button type="submit">Log In</button>
          </form>
        </div>

        {/* Sign up form */}
        <div className="column">
          <h4 className="subtitle is-4 has-text-centered">Sign Up</h4>
          <form onSubmit={this.handleSignup}>
            <input type="text" name="username" placeholder="username" />
            <input type="email" name="email" placeholder="email" />
            <input type="password" name="password" placeholder="password" />
            <button type="submit">Sign Up</button> 
          </form>
        </div>
      </div>
    );
  };
};


export default connect(
  null,
  { isUserLoggedIn }
// export UserAuth component with these connected to it
)(UserAuth);