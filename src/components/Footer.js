import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import CountryModel from '../models/CountryModel.js';

import { currentRegion } from '../actions/locationActions.js';
import { currentCountry } from '../actions/locationActions.js';

class Footer extends Component {
  state = {
    regions: this.props.regions,
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
      <div role="contentinfo" className="footer columns is-multiline">
        <div className="column is-four-fifths is-full-mobile">
          <h5 className="subtitle is-6 has-text-centered">Site Map</h5>
          <div className="columns is-multiline">
            <div className="column is-one-third-mobile">
              <h6 className="subtitle is-6">
                <Link to="/region"
                  onClick={() => this.props.currentRegion(this.state.regions[0])}>{this.state.regions[0].regionName}</Link>
              </h6>
              {this.state.countriesAfrica.map(country => (
                <div key={country._id}>
                  <Link to="/country" 
                    className="is-size-7"
                    onClick={() => this.props.currentCountry(country)}>{country.countryName}</Link><br />
                </div>
              ))}
            </div>

            <div className="column is-one-third-mobile">
              <h6 className="subtitle is-6">
                <Link to="/region"
                  onClick={() => this.props.currentRegion(this.state.regions[1])}>{this.state.regions[1].regionName}</Link>
              </h6>
              {this.state.countriesAsia.map(country => (
                <div key={country._id}>
                  <Link to="/country" 
                    className="is-size-7"
                    onClick={() => this.props.currentCountry(country)}>{country.countryName}</Link><br />
                </div>
              ))}
            </div>

            <div className="column is-one-third-mobile">
              <h6 className="subtitle is-6">
                <Link to="/region"
                  onClick={() => this.props.currentRegion(this.state.regions[2])}>{this.state.regions[2].regionName}</Link>
              </h6>
              {this.state.countriesAus.map(country => (
                <div key={country._id}>
                  <Link to="/country" 
                    className="is-size-7"
                    onClick={() => this.props.currentCountry(country)}>{country.countryName}</Link><br />
                </div>
              ))}
            </div>

            <div className="column is-one-third-mobile">
              <h6 className="subtitle is-6">
                <Link to="/region"
                  onClick={() => this.props.currentRegion(this.state.regions[3])}>{this.state.regions[3].regionName}</Link>
              </h6>
              {this.state.countriesEU.map(country => (
                <div key={country._id}>
                  <Link to="/country" 
                    className="is-size-7"
                    onClick={() => this.props.currentCountry(country)}>{country.countryName}</Link><br />
                </div>
              ))}
            </div>

            <div className="column is-one-third-mobile">
              <h6 className="subtitle is-6">
                <Link to="/region"
                  onClick={() => this.props.currentRegion(this.state.regions[4])}>{this.state.regions[4].regionName}</Link>
              </h6>
              {this.state.countriesNAmer.map(country => (
                <div key={country._id}>
                  <Link to="/country" 
                    className="is-size-7"
                    onClick={() => this.props.currentCountry(country)}>{country.countryName}</Link><br />
                </div>
              ))}
            </div>

            <div className="column is-one-third-mobile">
              <h6 className="subtitle is-6">
                <Link to="/region"
                  onClick={() => this.props.currentRegion(this.state.regions[5])}>{this.state.regions[5].regionName}</Link>
              </h6>
              {this.state.countriesSAmer.map(country => (
                <div key={country._id}>
                  <Link to="/country" 
                    className="is-size-7"
                    onClick={() => this.props.currentCountry(country)}>{country.countryName}</Link><br />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="column copyright has-text-right">
          <p className="is-size-7">&copy; 2019 Ronni</p>
          {/* social icons */}
          <div className="social-icons">
            <a href="https://github.com/ronsbons" className="icon"><i className="fab fa-github fa-lg"></i></a>
            <a href="https://www.linkedin.com/in/ronni-louie/" className="icon"><i className="fab fa-linkedin fa-lg"></i></a>
          </div>
          <p className="is-size-7">This site was tested for different types of color blindness on <a href="https://www.toptal.com/designers/colorfilter">Toptal</a>.</p>
        </div>
      </div>
    );
  }
}


export default connect(
  null,
  { currentRegion, currentCountry }
)(Footer);