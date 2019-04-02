import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { currentRegion } from '../../actions/locationActions.js';

import './Location.css';

class Location extends Component {
  render() {
    return (
      <div className="columns location-columns is-multiline">

        {/* loop through the locations passed down from HomeContainer */}
        {this.props.locations.map(location => (
          <div className="column is-one-third" key={location.locationName}>
            {/* .currentLocation is the action imported in */}
            {/* [] Try an if statement, one Link for currentRegion, one Link for currentCountry */}
            <Link to="/region"
                  onClick={() => this.props.currentRegion(location)}>
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

// this component needs access to the store in order to change it onClick
// [] CORRECT?
const mapStateToProps = (store) => {
  return {
    location: store.location
  }
}

export default connect(
  mapStateToProps,
  { currentRegion }
)(Location);
// export default Location;