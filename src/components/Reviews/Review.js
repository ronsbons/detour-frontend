import React, { Component } from 'react';

import { connect } from 'react-redux';

class Review extends Component {
  render() {
    // show Edit/Delete buttons is logged in user is author of review
    let modifyReviewButtons = [];

    if (this.props.user.isLoggedIn && this.props.user._id === this.props.review.user_id._id) {

        modifyReviewButtons.push(
          <div className="review-buttons is-pulled-right">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        );
    };

    return (
      <div className="message">
        <div className="message-header">
          <p>{this.props.review.user_id.username}</p>
          { modifyReviewButtons }
        </div>

        <div className="message-body">
          <p>{this.props.review.rating} / 5</p>
          <p>{this.props.review.content}</p>
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