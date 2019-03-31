import React, { Component } from 'react';
import { connect } from 'react-redux';

// [] IMPORT ACTION THAT OPENS/CLOSES MODAL
// import { action } from '.../actions'

class UserAuth extends Component {
  render() {
    return (
      <div className="navbar-item">
        <a className="navbar-item modal-button">Log In</a>
        <a className="navbar-item modal-button">Sign Up</a>
        {/* [] NO CLICK EVENT IN TRADITIONAL JQUERY SENSE */}
        {/* [] HAVE TO DEFINE onClick FUNCTION FOR THE LOG IN AND SIGN UP LINKS TO CHANGE THE STATE OF THE MODAL - SHOW/HIDE */}
        <div className="modal">
          <div className="modal-background has-background-grey-dark"></div>

          <div className="modal-content">
            <div className="columns">
              {/* Log In form */}
              <div className="column">
                <h3>Log In</h3>
                <form method="POST" action="">
                  <input type="text" name="username" placeholder="username" />
                  <input type="password" name="password" placeholder="username" />
                  <button type="submit">Log In</button>
                </form>
              </div>  {/* end of Log In form column div */}

              {/* Sign Up form */}
              <div className="column">
                <h3>Sign Up</h3>
                <form method="POST" action="">
                  <input type="text" name="username" placeholder="username" />
                  <input type="password" name="password" placeholder="username" />
                  <button type="submit">Sign Up</button>
                </form>
              </div>  {/* end of Sign Up form column div */}
            </div>  {/* end of columns */}
          </div>  {/* end of modal-content div */}

          {/* modal close button */}
          <button className="modal-close is-large" aria-label="close"></button>
        </div>  {/* end of modal div */}
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    // Sets props.modal equal to store.modal
    // [] TBD, CHANGE THIS STATE ITEM
    modal: store.modal
  };
};

export default connect(
  mapStateToProps,
  // { action }
// export UserAuth component with these connected to it
)(UserAuth);