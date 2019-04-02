import React, { Component } from 'react';

import { connect } from 'react-redux';

import Location from '../components/Location/Location.js';
import CountryModel from '../models/CountryModel.js';

class RegionContainer extends Component {
  state = {
    countries: [],
  };

  componentDidMount() {
    CountryModel.getCountriesByRegion(this.props.currentRegion.id)
      .then(response => {
        console.log(response.data);
        this.setState({
          countries: response.data
        });
        console.log(this.state.countries);
      })
      .catch(error => {
        console.log(`RegionContainer componentDidMount error when getting countries by region: ${error}`);
      });
  }

  render() {
    return (
      <div>
        <p>hi</p>
        <h3 className="subtitle is-3">{ this.props.currentRegion.name }</h3>
        <Location locations={this.state.countries} />
      </div>
    );
  }
}

// <Location locations={this.props.countries} />

// [] NEEDS TO ACCESS CLICKED ON REGION INFO FROM STORE IN ORDER TO PASS DOWN COUNTRY INFO TO LOCATION COMPONENT
const mapStateToProps = (store) => {
  return {
    currentRegion: store.location
  }
}

// use this.props.currentRegion.currentLocation_id (1 for Africa) to search db.Country

export default connect(
  mapStateToProps
)(RegionContainer)
// export default RegionContainer;
