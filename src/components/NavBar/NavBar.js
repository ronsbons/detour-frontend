import React, { Component } from 'react';
// connects component to actions
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import userauth component
import UserAuth from './UserAuth.js';
// import any action needed from actions folder
import { currentRegion } from '../../actions/locationActions.js';;

class NavBar extends Component {
  render() {
    let userNavItems = [];
    
    // [] TEST THIS SECTION ONCE WE HAVE USER AUTH WORKING AND IN STATE/STORE
    // if user IS logged in
    // if (this.props.user.isLoggedIn) {
    //   userNavItems.push(
    //     <div className="navbar-item">
    //       <Link className="navbar-item" to="/profile">Profile</Link>
    //       <a className="navbar-item">Log Out</a>              
    //     </div>
    //   )
    // } else {
    // if user is NOT logged in
    //   userNavItems.push(
    //     <UserAuth />
    //   )
    // };

    return (
      <div className="navbar" role="navigation" aria-label="main-navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">DeTour</Link>

          {/* [] NEED A JS FILE WITH JQUERY TO SET UP CLICK EVENT FOR NAVBAR BURGER */}
          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Regions</a>

              <div className="navbar-dropdown">
                {this.props.regions.map(region => (
                  <Link className="navbar-item"
                        to="/region"
                        key={region._id}
                        onClick={() => this.props.currentRegion(region)}>
                    {region.regionName}
                  </Link>
                ))}
              </div>
            </div>  {/* end of Regions dropdown */}

            {/* {userNavItems} */}
            {/* temporarily putting UserAuth, Profile, and Logout here until user log in is functional */}
            <UserAuth />
            <Link className="navbar-item" to="/profile">Profile</Link>
            <a className="navbar-item">Log Out</a>
          </div>
        </div>
      </div>
    )
  }
}

// Will need to access store (const mapStateToProps function) to get if user is logged in or not
const mapStateToProps = (store) => {
  return {
    // Sets props.user equal to store.user
    // [] TBD, MAY NEED TO CHANGE THIS STATE ITEM?
    user: store.user
  };
};

export default connect(
  // connects mapStateToProps because we have cause/need to access state
  mapStateToProps,
  // connects action we need to access in this component
  { currentRegion }
// export NavBar component with the above connected to it
)(NavBar);