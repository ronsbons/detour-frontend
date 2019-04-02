import React, { Component } from 'react';

import { connect } from 'react-redux';

import CountrySquare from '../components/Location/CountrySquare.js';
import CountryModel from '../models/CountryModel.js';

class RegionContainer extends Component {
  // set countries state in this component, because the data only needs to be accessed in this component
  state = {
    countries: [],
  };

  componentDidMount() {
    // axios call to backend to get countries with region_id that matches the currentRegion's (from store) id
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
        console.log(`RegionContainer componentDidMount error when getting countries by region: ${error}`);
      });
  }

  render() {
    return (
      <div className="region-container">
        <p>hi</p>
        <h3 className="subtitle is-3">{ this.props.currentRegion.name }</h3>
        {/* pass found countries to CountrySquare to be mapped */}
        <CountrySquare countries={this.state.countries} />
      </div>
    );
  }
}

// needs to access the current region (clicked on region) that's in store, so need mapStateToProps function
const mapStateToProps = (store) => {
  return {
    currentRegion: store.location
  }
}

export default connect(
  mapStateToProps
)(RegionContainer)
// export default RegionContainer;
