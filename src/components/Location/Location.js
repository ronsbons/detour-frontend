import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Location.css';

class Location extends Component {
  render() {
    return (
      <div className="columns location-columns is-multiline">
        {/* loop through the locations passed down */}
        {this.props.locations.map(location => (
          <div className="column is-one-third">
            <Link to="/" key={location.locationName}>
              <figure className="image is-128x128">
                <img src={location.locationPhoto} alt={location.locationName} />
              </figure>
              <h6 className="subtitle is-6">{location.locationName}</h6>
            </Link>
          </div>
        ))}
      </div>
    )
  }
}

export default Location;
