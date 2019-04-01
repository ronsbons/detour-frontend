import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Location.css';

// [] TEMPORARY HARD CODE IN REGION NAMES, BUT WILL HAVE TO BE MAPPED TO DO REGIONS AND THEN COUNTRY
class Location extends Component {
  render() {
    return (
      <div className="tile is-ancestor">
        <div className="tile is-parent is-vertical">
          <div className="tile is-child is-4">
            {/* [] NEED TO CHANGE LINK PATHS */}
            <Link to="/">
              <figure className="image is-128x128">
                <img src="./images/sho-hatakeyama-117306-unsplash.jpg" alt="man in Kenya by Sho Hatakeyama" />
              </figure>
              <h6 className="subtitle is-6">Africa</h6>
            </Link>
          </div>

          <div className="tile is-child is-4">
            <Link to="/">
              <figure className="image is-128x128">
                <img src="./images/jack-ward-522993-unsplash.jpg" alt="Cinque Terre by Jack Ward" />
              </figure>
              <h6 className="subtitle is-6">Europe</h6>
            </Link>
          </div>
        </div>

        <div className="tile is-parent is-vertical">
          <div className="tile is-child is-4">
            <Link to="/">
              <figure className="image is-128x128">
                <img src="./images/lisheng-chang-396821-unsplash.jpg" alt="floating market by Lisheng Chang" />
              </figure>
              <h6 className="subtitle is-6">Asia</h6>
            </Link>
          </div>

          <div className="tile is-child is-4">
            <Link to="/">
              <figure className="image is-128x128">
                <img src="./images/guillaume-jaillet-421771-unsplash.jpg" alt="maple leaf by Guillaume Jaillet" />
              </figure>
              <h6 className="subtitle is-6">North America</h6>
            </Link>
          </div>
        </div>

        <div className="tile is-parent is-vertical">
          <div className="tile is-child is-4">
            <Link to="/">
              <figure className="image is-128x128">
                <img src="./images/christopher-burns-429015-unsplash.jpg" alt="kangaroo at golden hour by Christopher Burns" />
              </figure>
              <h6 className="subtitle is-6">Australia</h6>
            </Link>
          </div>

          <div className="tile is-child is-4">
            <Link to="/">
              <figure className="image is-128x128">
                <img src="./images/eduardo-flores-759719-unsplash.jpg" alt="Machu Picchu by Eduardo Flores" />
              </figure>
              <h6 className="subtitle is-6">South America</h6>
            </Link>
          </div>
        </div>
      </div>
      
    );
  }
}

export default Location;
