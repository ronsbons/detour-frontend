import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { currentCountry } from '../../actions/locationActions.js';

import './Location.css';

class CountrySquare extends Component {
  render() {
    return (
      <div className="columns location-columns is-multiline">

        {/* loop through the locations passed down from RegionContainer */}
        {this.props.countries.map(country => (
          <div className="column is-one-third" key={country.countryName}>
            {/* .currentCountry is the action imported in */}
            {/* sends country object clicked on to change state */}
            <Link to="/country"
                  onClick={() => this.props.currentCountry(country)}>
              <figure className="image is-256x256">
                <img src={country.countryPhoto} alt={country.countryName} />
              </figure>
              <h6 className="subtitle is-6">{country.countryName}</h6>
            </Link>

          </div>
        ))}

      </div>
    )
  }
}

// this component needs access to the store in order to change it onClick
// [] CORRECT?
// const mapStateToProps = (store) => {
//   return {
//     location: store.location
//   }
// }

export default connect(
  null,
  { currentCountry }
)(CountrySquare);
// export default Location;