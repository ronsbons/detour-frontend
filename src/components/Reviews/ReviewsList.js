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

  componentDidMount() {
    this.getReviews();
  };

  // get reviews again after props.currentCountry changes in store -> this component's props
  componentDidUpdate(prevProps) {
    if (this.props.currentCountry.id !== prevProps.currentCountry.id) {
      this.getReviews();
    };
  };

  // define functions to set state for open/close modal
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
        this.getReviews();
      })
      .catch( (error) => {
        console.log(`add review error: ${error}`);
        // [] NEED A USER-FACING ERROR MESSAGE
      });
  };

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
    // show Add Review button if user is logged in
    let addReviewButton = [];

    if (this.props.user.isLoggedIn) {
      addReviewButton.push(
        <button onClick={this.openModal} key="add-button" className="button is-primary is-small">Add a Review</button>
      );
    };

    return (
      <div class="reviews-list">
        <h5 className="subtitle is-5 reviews-title">Reviews <span className="is-pulled-right">{ addReviewButton }</span></h5>
        
        {/* modal to hold review form */}
        {/* if this.state.modal is true ? set className to "is-active" : if not, set className to "" */}
        <div className={ this.state.isModalOpen ? "modal is-active" : "modal" }>
          <div className="modal-background" onClick={this.closeModal}></div>
          <div className="modal-content">
            <form onSubmit={this.handleSubmit}>
              <div className="field">
                <label htmlFor="rating" className="label">Rating: </label>
                <div className="control">
                  <input type="number"
                    name="rating"
                    min="1"
                    max="5"
                    id="rating"
                    className="input" />
                </div>
              </div>

              <div className="field">
                <label htmlFor="review-content" className="label">Review:</label>
                <div className="control">
                  <textarea name="content"
                    id="review-content"
                    className="textarea"></textarea>
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-primary">Submit</button>
                </div>
              </div>
            </form>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={this.closeModal}></button>
        </div>  {/* end of modal div */}

        {this.state.reviews.map(review => (
          <Review review={review} deleteReview={this.deleteReview} key={review._id} />
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
