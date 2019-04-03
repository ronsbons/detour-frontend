import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserModel from '../models/UserModel.js';

// need an action that sets isLoggedIn to true
// need an action that sets user to response.data.user
// import { action } from '.../actions'

class UserAuth extends Component {
  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSignup = event => {
    event.preventDefault();
    UserModel.signUp()
  }

  render() {
    return (
      <div className="columns">
        {/* Log in form */}
        <div className="column">
          <h4 className="subtitle is-4 has-text-centered">Log In</h4>
          <form onSubmit={handleLogin}>
            <input type="text" name="username" placeholder="username" />
            <input type="password" name="password" placeholder="password" />
            <button type="submit">Log In</button>
          </form>
        </div>

        {/* Sign up form */}
        <div className="column">
          <h4 className="subtitle is-4 has-text-centered">Log In</h4>
          <form onSubmit={handleSignup}>
            <input type="text" name="username" placeholder="username" />
            <input type="email" name="email" placeholder="email" />
            <input type="password" name="password" placeholder="password" />
            <button type="submit">Sign Up</button> 
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {

  };
};

export default connect(
  mapStateToProps,
  // { action }
// export UserAuth component with these connected to it
)(UserAuth);