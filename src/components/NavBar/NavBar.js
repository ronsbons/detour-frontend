import React, { Component } from 'react';
import {Link} from 'react-router-dom';

// import userauth component
import UserAuth from './UserAuth.js';

class NavBar extends Component {
  render() {
    return (
      <div className="navbar" role="navigation" aria-label="main-navigation">
        <div className="navbar-brand">
          <a href="" className="navbar-item">DeTour</a>

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
                <a className="navbar-item">Africa</a>
                <a className="navbar-item">Asia</a>
                <a className="navbar-item">Australia</a>
                <a className="navbar-item">Europe</a>
                <a className="navbar-item">North America</a>
                <a className="navbar-item">South America</a>
              </div>
            </div>  {/* end of Regions dropdown */}

            <UserAuth />
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar;