import React, { Component } from 'react';

import { connect } from 'react-redux';

// import nested CountrySquare component
import CountrySquare from '../components/Location/CountrySquare.js';
// import CountryModel for axios call
import CountryModel from '../models/CountryModel.js';

class RegionContainer extends Component {
  // set local state to hold the data received from axios call
  // set state in this component, because the data only needs to be accessed in this component
  state = {
    countries: [],
  };

  // function holding axios call to backend to get countries with region_id that matches the currentRegion's (from store) id
  getCountries = () => {
    CountryModel.getCountriesByRegion(this.props.currentRegion.id)
      .then(response => {
        console.log(response.data);
        // adds found countries to this.state
        this.setState({
          countries: response.data
        });
        console.log(this.state.countries);
      })
      .catch(error => {
        console.log(`RegionContainer error when getting countries by region: ${error}`);
      });
  };

  componentDidMount() {
    // get region's countries upon first visit/mount to '/region'
    this.getCountries();
  };

  // performs another axios call to get countries to update the component b/c store, therefore props, changed
  componentDidUpdate(prevProps) {
    if (this.props.currentRegion.id !== prevProps.currentRegion.id) {
      this.getCountries();
    };
  };

  render() {
    return (
      <section className="region-container">
        <h3 className="subtitle is-3">{ this.props.currentRegion.name }</h3>
        {/* pass found countries to CountrySquare to be mapped */}
        <CountrySquare countries={this.state.countries} />
      </section>
    );
  }
}

// needs to access the current region (clicked on region) that's in store, so need mapStateToProps function
const mapStateToProps = (store) => {
  return {
    currentRegion: store.location
  };
};

export default connect(
  mapStateToProps
)(RegionContainer)
