import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import CountryModel from '../models/CountryModel.js';

import { currentCountry } from '../actions/locationActions.js';

class Footer extends Component {
  state = {
    countriesAfrica: [],
    countriesAsia: [],
    countriesAus: [],
    countriesEU: [],
    countriesNAmer: [],
    countriesSAmer: [],
  };

  componentDidMount() {
    CountryModel.getAllCountries()
      .then( (response) => {
        console.log(`getAllCountries response: ${response.data}`);
        // filter countries by region
        let countriesAfrica = response.data.filter( (country) => {
          return country.region_id === 1;
        });

        let countriesAsia = response.data.filter( (country) => {
          return country.region_id === 2;
        });

        let countriesAus = response.data.filter( (country) => {
          return country.region_id === 3;
        });

        let countriesEU = response.data.filter( (country) => {
          return country.region_id === 4;
        });

        let countriesNAmer = response.data.filter( (country) => {
          return country.region_id === 5;
        });

        let countriesSAmer = response.data.filter( (country) => {
          return country.region_id === 6;
        });

        this.setState({
          countriesAfrica: countriesAfrica,
          countriesAsia: countriesAsia,
          countriesAus: countriesAus,
          countriesEU: countriesEU,
          countriesNAmer: countriesNAmer,
          countriesSAmer: countriesSAmer,
        });
      }).catch( (error) => {
        console.log(`getAllCountries error: ${error}`);
      });
  };


  render() {
    return (
      <div className="footer columns">
        <div className="column is-three-quarters">
          <h5 className="subtitle is-6 has-text-centered">Site Map</h5>
          <div className="columns">
            <div className="column">
              <h6 className="subtitle is-6">Africa</h6>
              {this.state.countriesAfrica.map(country => (
                <div>
                  <Link to="/country" 
                  className="is-size-7"
                  key={country._id}
                  onClick={() => this.props.currentCountry(country)}>{country.countryName}</Link><br />
                </div>
              ))}
            </div>

            <div className="column">
              <h6 className="subtitle is-6">Asia</h6>
              {this.state.countriesAsia.map(country => (
                <div>
                  <Link to="/country" 
                  className="is-size-7"
                  key={country._id}
                  onClick={() => this.props.currentCountry(country)}>{country.countryName}</Link><br />
                </div>
              ))}
            </div>

            <div className="column">
              <h6 className="subtitle is-6">Australia</h6>
              {this.state.countriesAus.map(country => (
                <div>
                  <Link to="/country" 
                  className="is-size-7"
                  key={country._id}
                  onClick={() => this.props.currentCountry(country)}>{country.countryName}</Link><br />
                </div>
              ))}
            </div>

            <div className="column">
              <h6 className="subtitle is-6">Europe</h6>
              {this.state.countriesEU.map(country => (
                <div>
                  <Link to="/country" 
                  className="is-size-7"
                  key={country._id}
                  onClick={() => this.props.currentCountry(country)}>{country.countryName}</Link><br />
                </div>
              ))}
            </div>

            <div className="column">
              <h6 className="subtitle is-6">North America</h6>
              {this.state.countriesNAmer.map(country => (
                <div>
                  <Link to="/country" 
                  className="is-size-7"
                  key={country._id}
                  onClick={() => this.props.currentCountry(country)}>{country.countryName}</Link><br />
                </div>
              ))}
            </div>

            <div className="column">
              <h6 className="subtitle is-6">South America</h6>
              {this.state.countriesSAmer.map(country => (
                <div>
                  <Link to="/country" 
                  className="is-size-7"
                  key={country._id}
                  onClick={() => this.props.currentCountry(country)}>{country.countryName}</Link><br />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="column copyright">
          <p className="is-size-7">&copy; 2019 DeTour</p>
          {/* social icons */}
        </div>
      </div>
    );
  }
}


export default connect(
  null,
  { currentCountry }
)(Footer);