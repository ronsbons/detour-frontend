import React, { Component } from 'react';

import { connect } from 'react-redux';

import ReviewModel from '../../models/ReviewModel.js';

class Review extends Component {
  // set local state for modal condition
  // set local state containing review inherited from ReviewsList in order for component to re-render upon editing the review
  state = {
    isDeleteModalOpen: false,
    isEditModalOpen: false,
    review: this.props.review,
  };

  // define functions to set state for open/close modals
  openEditModal = (event) => {
    event.preventDefault();
    // upon click, change state.modal to true
    this.setState({
      isEditModalOpen: true,
    });
  };

  closeEditModal = (event) => {
    event.preventDefault();
    // upon click, change state.modal to false
    this.setState({
      isEditModalOpen: false,
    });
  };

  openDeleteModal = (event) => {
    event.preventDefault();
    this.setState({
      isDeleteModalOpen: true,
    });
  };

  closeDeleteModal = (event) => {
    event.preventDefault();
    this.setState({
      isDeleteModalOpen: false,
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
        // and change local state to the edited review in order to re-render the page with the changes
        this.setState({
          isEditModalOpen: false,
          review: response.data,
        });
      }).catch( (error) => {
        console.log(`edit review error: ${error}`);
        // [] NEED USER-FACING ERROR MESSAGE
      });
  };

  handleDelete = (event) => {
    event.preventDefault();
    console.log(`in handleDelete`);
    this.props.deleteReview(this.state.review._id);
  };

  render() {
    // show Edit/Delete buttons is logged in user is author of review
    let modifyReviewButtons = [];

    if (this.props.user.isLoggedIn && this.props.user._id === this.state.review.user_id._id) {
      modifyReviewButtons.push(
        <div className="review-buttons is-pulled-right" key="modify-button">
          <button className="button is-primary is-small button-span" onClick={this.openEditModal}>Edit</button>
          <button className="button is-light is-small" onClick={this.openDeleteModal}>Delete</button>
        </div>
      );
    };

    return (
      <div className="message">
        <div className="message-header">
          <p>{this.state.review.country_id.countryName} | {this.state.review.user_id.username}</p>

          { modifyReviewButtons }

          {/* modal to hold edit review form */}
          {/* if this.state.modal is true ? set className to "is-active" : if not, leave as "modal" */}
          <div className={this.state.isEditModalOpen ? "modal is-active" : "modal"}>
            <div className="modal-background" onClick={this.closeEditModal}></div>
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
                      defaultValue={this.state.review.rating}
                      className="input" />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="review-content" className="label">Review:</label>
                  <div className="control">
                    <textarea name="content"
                      id="review-content"
                      defaultValue={this.state.review.content}
                      className="textarea"></textarea>
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <button type="submit" className="button is-primary">Submit Changes</button>
                  </div>
                </div>
              </form>
            </div>  {/* end of modal-content div */}
            <button className="modal-close is-large" aria-label="close" onClick={this.closeEditModal}></button>
          </div>  {/* end of modal div */}

          <div className={this.state.isDeleteModalOpen ? "modal is-active" : "modal"}>
            <div className="modal-background" onClick={this.closeDeleteModal}></div>
            <div className="modal-content">
              <h5 className="subtitle is-5">Are you sure you want to delete your review?</h5>
              <button className="button is-primary button-span" onClick={this.handleDelete}>Yes!</button>
              <button className="button is-light" onClick={this.closeDeleteModal}>Cancel</button>
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={this.closeDeleteModal}></button>
          </div>  {/* end of delete modal div */}
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