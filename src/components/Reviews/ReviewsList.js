import React, { Component } from 'react';

import { connect } from 'react-redux';

// import nested component
import Review from './Review.js';
// import model for axios call
import ReviewModel from '../../models/ReviewModel.js';


class ReviewsList extends Component {
  // set local state for reviews because they're not needed in any other component
  // set local state for modal condition
  state = {
    reviews: [],
    isModalOpen: false,
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

  // function when add review form is submitted
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
      .catch( (error) => {
        console.log(`add review error: ${error}`);
        // [] NEED A USER-FACING ERROR MESSAGE
      });
  };

  componentDidMount() {
    this.getReviews();
  };

  getReviews = () => {
    ReviewModel.getReviewsByCountry(this.props.currentCountry.id)
      .then( (response) => {
        // add found reviews to local state
        this.setState({
          reviews: response.data,
        });
      }).catch( (error) => {
        console.log(`getReviews error`);
        // [] NEED USER-FACING ERROR MESSAGE
      });
  };

  render() {
    // show Add Review button if user is logged in
    let addReviewButton = [];

    if (this.props.user.isLoggedIn) {
      addReviewButton.push(
        <button onClick={this.openModal}>Add a Review</button>
      );
    };

    return (
      <div>
        <h5 className="subtitle is-5">Reviews</h5>

        { addReviewButton }

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

        {this.state.reviews.map(review => (
          <Review review={review} key={review._id} />
        ))}
      </div>
    );
  }
}

// puts the user object in store into this.props.user
const mapStateToProps = (store) => {
  return {
    currentCountry: store.location,
    user: store.user,
  };
};

// connects the store and added props to component to export
export default connect(
  mapStateToProps
)(ReviewsList);
