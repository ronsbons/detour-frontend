import React, { Component } from 'react';
// connects component to actions
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';

// import any action needed from actions folder
import { currentRegion } from '../actions/locationActions.js';
import { userLogOut } from '../actions/userActions.js';

class NavBar extends Component {
  // set local state to open/close navbar burger and to redirect upon logout
  state = {
    isNavBurgerActive: false,
    // redirect: false,
  };

  // define function to toggle the navbar burger
  toggleNavBurger = (event) => {
    this.setState({
      // toggles state to opposite of whatever is the current state
      isNavBurgerActive: !this.state.isNavBurgerActive,
    });
  };

  // define handleLogout function
  handleLogout = (event) => {
    event.preventDefault();
    console.log('in handleLogout');
    // clears localStorage of token
    localStorage.clear();
    // dispatches action userLogOut
    this.props.userLogOut();
    // [] CREATES AN INFINITE LOOP B/C STATE STAYS TRUE
    // this.setState({
    //   redirect: true,
    // });
  };

  render() {
    let userNavItems = [];
    
    // if user IS logged in
    if (this.props.user.isLoggedIn) {
      // put Profile and Log Out links into userNavItems
      userNavItems.push(
        <div className="navbar-item" key="loggedInNav">
          <Link className="navbar-item" to="/profile">Profile</Link>
          <a className="navbar-item" onClick={this.handleLogout}>Log Out</a>
        </div>
      );
    } else {
    // if user is NOT logged in
      userNavItems.push(
        // put Log In/SignUp link in
        <Link className="navbar-item"
              to="/login"
              key="loggedOutNav">Log In/Sign Up</Link>
      );
    };

    // if this.state.redirect is true (upon logout)
    // if (this.state.redirect) {
    //   return (
        // redirect to landing page
    //     <Redirect to="/login" />
    //   );
    // };

    return (
      <div className="navbar" role="navigation" aria-label="main-navigation">
        <div className="navbar-brand">
          <Link className="navbar-item company-icon" to="/"><img src="./images/iconfinder_resolutions-21_897231.png" alt="DeTour icon" /><span className="nav-company">DeTour</span></Link>

          {/* if this.state.navBurger is true ? set className to "is-active" : if not, take it out */}
          <a role="button" className={ this.state.isNavBurgerActive ? "navbar-burger burger is-active" : "navbar-burger burger" } aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={this.toggleNavBurger}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        {/* toggles "is-active" class on navbar menu depending on state */}
        <div id="navbarBasicExample" className={ this.state.isNavBurgerActive ? "navbar-menu is-active" : "navbar-menu" }>
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

            {/* display NavLinks depending on if user is logged in/out */}
            { userNavItems }
          </div>  {/* end of navbar-end div */}
        </div>  {/* end of navbarBasicExample div */}
      </div>  // end of navbar div
    )  // end of return
  }  // end of render
}

// Will need to access store (const mapStateToProps function) to get if user is logged in or not
const mapStateToProps = (store) => {
  return {
    // Sets props.user equal to store.user
    user: store.user,
  };
};

export default connect(
  // connects mapStateToProps because we have cause/need to access state
  mapStateToProps,
  // connects actions we need to access in this component
  { currentRegion, userLogOut }
// export NavBar component with the above connected to it
)(NavBar);