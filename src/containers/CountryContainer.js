import React, { Component } from 'react';

import { connect } from 'react-redux';

// import any nested component needed
import Tour from '../components/Tour.js';
// import any model needed for axios calls
import TourModel from '../models/TourModel.js';
import ReviewModel from '../models/ReviewModel.js';

import './Tour.css';


class CountryContainer extends Component {
  // set local state to hold the data received from axios call
  // set state in this component, because the data only needs to be accessed in this component
  state = {
    tours: [],
    isModalOpen: false,
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

  // sets state for open/close modal
  openModal = (event) => {
    event.preventDefault();
    // upon click, change state.modal to true
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = (event) => {
    event.preventDefault();
    // upon click, change state.modal to false
    this.setState({
      isModalOpen: false,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);

    let rating = event.target[0].valueAsNumber;
    let content = event.target[1].value;
    console.log(`review info`, rating, content);

    ReviewModel.addReview(content, rating, this.props.user._id, this.props.currentCountry.id)
      .then( (response) => {
        console.log(`addReview response: ${response.data.content}`);
        // after adding a review, close modal
        this.setState({
          isModalOpen: false
        });
        // and perform axios call again to get all reviews for country
      })
  }


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

        <h5 className="subtitle is-5">Reviews</h5>
        {/* [] HIDE THIS BUTTON IF USER NOT LOGGED IN */}
        <button onClick={this.openModal}>Add a Review</button>
        {/* if this.state.modal is true ? set className to "is-active" : if not, set className to "" */}
        <div className={ this.state.isModalOpen ? "modal is-active" : "modal" }>
          <div className="modal-background"></div>
          <div className="modal-content">
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="rating">Rating: </label>
              <input type="number" name="rating" min="1" max="5" id="rating" />
              
              <label htmlFor="review-content">Review:</label>
              <textarea name="content" id="review-content" cols="50" rows="20"></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={this.closeModal}></button>
        </div>  {/* end of modal div */}
      </div>
    );
  }
}


// puts the location object in store into this.props.currentCountry
const mapStateToProps = (store) => {
  return {
    currentCountry: store.location,
    user: store.user,
  };
};

// connects the store and added props to component to export
export default connect(
  mapStateToProps
)(CountryContainer);
