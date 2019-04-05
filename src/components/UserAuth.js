import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import UserModel from '../models/UserModel.js';

import { isUserLoggedIn } from '../actions/userActions.js';

class UserAuth extends Component {
  // set local state of redirect so that when sign up or log in changes this state to true, it redirects
  state = {
    redirect: false,
  };

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
        localStorage.token = response.data.signedJwt;
        // sends new user data to action isUserLoggedIn
        this.props.isUserLoggedIn(response.data.user);
        // change state to true in order to redirect
        this.setState({
          redirect: true,
        });
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
        localStorage.token = response.data.signedJwt;
        // sends logged in user data to action
        this.props.isUserLoggedIn(response.data.user);
        // change state to true in order to redirect
        this.setState({
          redirect: true,
        });        
      })
      .catch(error => {
        console.log(`front end login error`);
        // [] NEED A USER-FACING ERROR MESSAGE
      });
  };

  render() {
    // if state.redirect is true
    if (this.state.redirect) {
      return (
        // redirect to landing page
        <Redirect to="/" />
      );
    };


    return (
      <div className="columns">
        {/* Log in form */}
        <div className="column">
          <h4 className="subtitle is-4 has-text-centered">Log In</h4>
          <form onSubmit={this.handleLogin}>
            {/* label for corresponds with input id */}
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="username" id="username" />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="password" id="password" />

            <button type="submit">Log In</button>
          </form>
        </div>

        {/* Sign up form */}
        <div className="column">
          <h4 className="subtitle is-4 has-text-centered">Sign Up</h4>
          <form onSubmit={this.handleSignup}>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="username" id="username" />

            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="email" id="email" />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="password" id="password" />
            
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