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
      <section className="columns user-forms">
        {/* Log in form */}
        <div className="column">
          <h4 className="subtitle is-4 has-text-centered">Log In</h4>
          <form onSubmit={this.handleLogin}>
            <div className="field">
              {/* label htmlFor corresponds with input id */}
              <label htmlFor="username" className="label">Username</label>
              <div className="control">
                <input type="text" name="username" placeholder="username" id="username" className="input" />
              </div>
            </div>

            <div className="field">
              <label htmlFor="password" className="label">Password</label>
              <div className="control">
                <input type="password" name="password" placeholder="password" id="password" className="input" />
              </div>
            </div>

            <div className="field">
              <div className="control">
                <button type="submit"
                  aria-label="log in"
                  className="button is-primary">Log In</button>
              </div>
            </div>
          </form>
        </div>

        {/* Sign up form */}
        <div className="column">
          <h4 className="subtitle is-4 has-text-centered">Sign Up</h4>
          <form onSubmit={this.handleSignup}>
            <div className="field">
              <label htmlFor="username" className="label">Username</label>
              <div className="control">
                <input type="text" name="username" placeholder="username" id="username" className="input" />
              </div>
            </div>

            <div className="field">
              <label htmlFor="email" className="label">Email</label>
              <div className="control">
                <input type="email" name="email" placeholder="email" id="email" className="input" />
              </div>
            </div>

            <div className="field">
              <label htmlFor="password" className="label">Password</label>
              <div className="control">
                <input type="password" name="password" placeholder="password" id="password" className="input" />
              </div>
            </div>

            <div className="field">
              <div className="control">
                <button type="submit"
                  aria-label="sign up"
                  className="button is-primary">Sign Up</button> 
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  };
};


export default connect(
  null,
  { isUserLoggedIn }
// export UserAuth component with these connected to it
)(UserAuth);