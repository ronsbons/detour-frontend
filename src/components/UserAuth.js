import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserModel from '../models/UserModel.js';

import { isUserLoggedIn } from '../actions/userActions.js';

class UserAuth extends Component {
  handleSignup = (event) => {
    console.log(event);
    event.preventDefault();

    // stores form input values into variables
    let username = event.target[0].value;
    let email = event.target[1].value;
    let password = event.target[2].value;
    console.log('sign up info', username, email);

    // send form input values to axios call in the signUp method in UserModel.js
    UserModel.signUp(username, email, password)
      .then(response => {
        console.log(response.data);
        // store jwt in local storage token
        // [] should store jwt in store if i can figure out redux-persist
        localStorage.token = response.data.signedJwt;
        
        // sends new user data to action isUserLoggedIn
        this.props.isUserLoggedIn(response.data.user);
      })
      .catch(error => {
        console.log(`front end sign up error`);
        // [] NEED A USER-FACING ERROR MESSAGE
      });
  };

  handleLogin = (event) => {
    console.log(event);
    event.preventDefault();

    // stores form input values into variables
    let username = event.target[0].value;
    let password = event.target[1].value;
    console.log(`login info: ${username}`);

    UserModel.login(username, password)
      .then(response => {
        console.log(response.data);
        // store jwt in localstorage token
        // should store jwt in store if i can figure out redux-persist
        localStorage.token = response.data.signedJwt;
        debugger;
        // sends logged in user data to action
        this.props.isUserLoggedIn(response.data.user);
      })
      .catch(error => {
        console.log(`front end login error`);
        // [] NEED A USER-FACING ERROR MESSAGE
      });
  };

  render() {
    return (
      <div className="columns">
        {/* Log in form */}
        <div className="column">
          <h4 className="subtitle is-4 has-text-centered">Log In</h4>
          <form onSubmit={this.handleLogin}>
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