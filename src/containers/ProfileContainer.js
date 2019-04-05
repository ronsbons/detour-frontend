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

  // need to define delete review function here (take from ReviewsList.js)

  render() {
    return (
      <div className="columns">
        <div className="column">
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
              <SavedTours tour={tour} key={tour._id} />
            ))}
          </div>

          <div>
            <h5 className="subtitle is-5">Reviews</h5>
            {/* map through this.state.reviews and pass to Review component */}
            {this.state.reviews.map(review => (
              <Review review={review} key={review._id} />
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