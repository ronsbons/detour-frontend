import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { currentRegion } from '../../actions/locationActions.js';

import './Location.css';

class RegionSquare extends Component {
  render() {
    return (
      <div className="columns location-columns is-multiline">

        {/* loop through the locations passed down from HomeContainer */}
        {this.props.regions.map(region => (
          <div className="column is-one-third" key={region._id}>
            {/* .currentRegion is the action imported in */}
            {/* sends region object clicked on to change state */}
            <Link to="/region"
                  onClick={() => this.props.currentRegion(region)}>
              <figure className="image is-128x128">
                <img src={region.regionPhoto} alt={region.regionName} />
              </figure>
              <h6 className="subtitle is-6">{region.regionName}</h6>
            </Link>

          </div>
        ))}

      </div>
    )
  }
}


export default connect(
  null,
  { currentRegion }
)(RegionSquare);
// export default Location;