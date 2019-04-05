import React, { Component } from 'react';

import { connect } from 'react-redux';

// import any nested component needed
import Tour from '../components/Tour.js';
import ReviewsList from '../components/Reviews/ReviewsList.js';
// import any model needed for axios calls
import TourModel from '../models/TourModel.js';

import './Tour.css';


class CountryContainer extends Component {
  // set local state to hold the data received from axios call
  // set state in this component, because the data only needs to be accessed in this component
  state = {
    tours: [],
  };

  getTours = () => {
    TourModel.getToursByCountry(this.props.currentCountry.id)
      .then(response => {
        console.log(response.data);
        this.setState({
          tours: response.data
        });
      })
      .catch(error => {
        console.log(`CountryContainer error when getting tours by country: ${error}`);
        // [] NEED USER-FACING ERROR MESSAGE
      });
  };

  // get country's tours upon first visit/mount to '/country'
  componentDidMount() {
    this.getTours();
  };

  // perform axios call to get country's tours again when store/props (currentCountry) changes
  componentDidUpdate(prevProps) {
    if (this.props.currentCountry.id !== prevProps.currentCountry.id) {
      this.getTours();
    };
  };


  render() {
    return (
      <div className="country-container">
        <h3 className="subtitle is-3">{this.props.currentCountry.name}</h3>
        <div className="columns">
          <div className="column is-one-fifth">
            <div className="tour-cell">
              <h6>Company</h6>
            </div>

            <div className="tour-cell">
              <h6>Tour Name</h6>
            </div>

            <div className="tour-cell">
              <h6>Length</h6>
            </div>

            <div className="tour-cell">
              <h6>Cost</h6>
            </div>

            <div className="tour-cell">
              <h6>Countries Visited</h6>
            </div>
          </div>
          {/* iterate through data from axios call */}
          {this.state.tours.map(tour => (
            <Tour tour={tour} key={tour._id} />
          ))}
        </div>

        <ReviewsList />
      </div>
    );
  }
}


// puts the location object in store into this.props.currentCountry
const mapStateToProps = (store) => {
  return {
    currentCountry: store.location,
  };
};

// connects the store and added props to component to export
export default connect(
  mapStateToProps
)(CountryContainer);
