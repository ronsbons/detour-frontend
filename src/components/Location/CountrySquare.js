import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { currentCountry } from '../../actions/locationActions.js';


class CountrySquare extends Component {
  render() {
    return (
      <div className="columns location-columns is-multiline">

        {/* loop through the locations passed down from RegionContainer */}
        {this.props.countries.map(country => (
          <div className="column is-one-third region-square" key={country.countryName}>
            {/* .currentCountry is the action imported in */}
            {/* sends country object clicked on to change state */}
            <Link to="/country"
                  onClick={() => this.props.currentCountry(country)}>
              <figure className="image is-256x256 location-photo">
                <img src={country.countryPhoto} alt={country.countryName} />
              </figure>
              <div className="location-name-overlay">
                <h2 className="subtitle is-2 location-name">{country.countryName}</h2>
              </div>
            </Link>

          </div>
        ))}

      </div>
    )
  }
}


export default connect(
  null,
  { currentCountry }
)(CountrySquare);
// export default Location;