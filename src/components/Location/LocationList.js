import React, { Component } from 'react';
// connects component to actions
import { connect } from 'react-redux';

import Location from './Location.js';

class LocationList extends Component {
  render() {
    return (
      // need to iterate through region or country to make Location squares
      <Location />
    );
  }
}

// will need to access store to get region names and photos or country names and photos
const mapStateToProps = (store) => {
  return {
    // [] THIS NEEDS TO BE WORKED THROUGH
    regions: store.regions
  };
};

export default connect(
  mapStateToProps,
  // { action }
)(LocationList);
