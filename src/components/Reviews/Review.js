import React, { Component } from 'react';

import { connect } from 'react-redux';

import ReviewModel from '../../models/ReviewModel.js';

class Review extends Component {
  // set local state for modal condition
  // set local state containing review inherited from ReviewsList in order for component to re-render upon editing the review
  state = {
    isModalOpen: false,
    review: this.props.review,
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

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);

    let rating = event.target[0].valueAsNumber;
    let content = event.target[1].value;
    console.log(`update review info:`, rating, content);

    ReviewModel.editReview(this.state.review._id, content, rating)
      .then( (response) => {
        console.log(`editReview response: ${response.data.content}`);
        // close modal/form after submit
        // and set this.state.review to the edited review in order to re-render the page with the changes
        this.setState({
          isModalOpen: false,
          review: response.data,
        });
      }).catch( (error) => {
        console.log(`edit review error: ${error}`);
        // [] NEED USER-FACING ERROR MESSAGE
      });
  };

  render() {
    // show Edit/Delete buttons is logged in user is author of review
    let modifyReviewButtons = [];

    if (this.props.user.isLoggedIn && this.props.user._id === this.state.review.user_id._id) {
      modifyReviewButtons.push(
        <div className="review-buttons is-pulled-right" key="modify-button">
          <button onClick={this.openModal}>Edit</button>
          <button>Delete</button>
        </div>
      );
    };

    return (
      <div className="message">
        <div className="message-header">
          <p>{this.state.review.user_id.username}</p>

          { modifyReviewButtons }

          {/* modal to hold edit review form */}
          {/* if this.state.modal is true ? set className to "is-active" : if not, leave as "modal" */}
          <div className={this.state.isModalOpen ? "modal is-active" : "modal"}>
            <div className="modal-background"></div>
            <div className="modal-content">
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="rating">Rating: </label>
                <input type="number"
                  name="rating"
                  min="1"
                  max="5"
                  id="rating"
                  defaultValue={this.state.review.rating} />

                <label htmlFor="review-content">Review:</label>
                <textarea name="content"
                  id="review-content"
                  cols="50"
                  rows="20"
                  defaultValue={this.state.review.content}></textarea>

                <button type="submit">Submit Changes</button>
              </form>
            </div>  {/* end of modal-content div */}
            <button className="modal-close is-large" aria-label="close" onClick={this.closeModal}></button>
          </div>  {/* end of modal div */}
        </div>

        <div className="message-body">
          <p>{this.state.review.rating} / 5</p>
          <p>{this.state.review.content}</p>
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
)(Review);