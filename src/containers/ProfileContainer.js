import React, { Component } from 'react';

import { connect } from 'react-redux';

import SavedTours from '../components/SavedTours.js';
import Review from '../components/Reviews/Review.js';

import UserModel from '../models/UserModel.js';
import ReviewModel from '../models/ReviewModel.js';


class ProfileContainer extends Component {
  state = {
    savedTours: [],
    reviews: [],
  };

  componentDidMount() {
    // perform axios call to get user info, including saved tours
    UserModel.getUserInfo(this.props.user._id)
      .then( (response) => {
        console.log(`getUserInfo response bit: ${response.data.saved_tour_id[0].name}`);
        this.setState({
          savedTours: response.data.saved_tour_id,
        });
      }).catch( (error) => {
        console.log(`getUserInfo error: ${error}`);
        // [] NEED USER-FACING ERROR MESSAGE
      });

    // perform axios call to get reviews by user
    ReviewModel.getReviewsByUser(this.props.user._id)
      .then( (response) => {
        console.log(`getReviewsByUser response: ${response.data}`);
        this.setState({
          reviews: response.data,
        });
      }).catch( (error) => {
        console.log(`getReviewsByUser error: ${error}`);
        // [] NEED USER-FACING ERROR MESSAGE
      });
  };

  componentDidUpdate() {

  };

  // function to remove saved tour from list of saved tours
  removeTour = (userId, tourId) => {
    console.log(`in removeTour`);
    UserModel.removeSavedTour(userId, tourId)
    .then( (response) => {
      console.log(`user's saved tours now: ${response.data.saved_tour_id}`);
      let savedTours = this.state.savedTours.filter( (tour) => {
        console.log(`filtering saved tours`);
        // [] response is going to be the updated user with an array of saved_tour_ids without the removed tour in it
        // [] so we want to filter this.state.reviews to match the ones in the response
        // [] but we need to iterate through the response ones
        // want to return the tour._id that is in response.data.saved_tour_id array
        let savedTourIds = response.data.saved_tour_id;

      });

      this.setState({
        savedTours: savedTours,
      });
    }).catch( (error) => {
      console.log(`remove saved tour error: ${error}`);
      // [] NEED USER-FACING ERROR MESSAGE
    });
  };

  // same delete review function as in ReviewsList.js
  deleteReview = (reviewId) => {
    ReviewModel.deleteReview(reviewId)
      .then( (response) => {
        console.log(`deleteReview response: ${response.data}`);
        // singular review represents single review in this.state.reviews
        let reviews = this.state.reviews.filter( (review) => {
          console.log('filtering reviews');
          // filter this.state.reviews to be all the reviews except the review that was deleted
          return review._id !== response.data._id;
        });
        this.setState({
          reviews: reviews,
        });
      }).catch( (error) => {
        console.log(`delete review error: ${error}`);
        // [] NEED USER-FACING ERROR MESSAGE
      });
  };

  render() {
    return (
      <div className="columns">
        <div className="column is-one-quarter">
          <div className="user-icon">
            {/* [] CHANGE TO FIRST LETTER OF USER'S USERNAME */}
            <h2 className="subtitle is-2">R</h2>
          </div>

          <h5 className="subtitle is-5">{this.props.user.username}</h5>

          {/* [] CHANGE TO DYNAMICALLY POPULATED # OF SAVED TOURS AND # OF REVIEWS */}
          <p># of Saved Tours</p>
          <p># of Reviews</p>
        </div>

        <div className="column">
          <h5 className="subtitle is-5">Saved Tours</h5>
          <div className="columns is-multiline">
            {/* map through this.state.tours and pass to SavedTours component */}
            {this.state.savedTours.map(tour => (
              <SavedTours tour={tour} removeTour={this.removeTour} key={tour._id} />
            ))}
          </div>

          <div>
            <h5 className="subtitle is-5">Reviews</h5>
            {/* map through this.state.reviews and pass to Review component */}
            {this.state.reviews.map(review => (
              <Review review={review} deleteReview={this.deleteReview} key={review._id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

// puts the user object in store into this.props.user
const mapStateToProps = (store) => {
  return {
    user: store.user,
  };
};

// connects the store and added props to component to export
export default connect(
  mapStateToProps
)(ProfileContainer);