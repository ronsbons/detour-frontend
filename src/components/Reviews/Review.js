import React, { Component } from 'react';

class Review extends Component {
  render() {
    return (
      <div className="message">
        <div className="message-header">
          <p>{this.props.review.user_id.username}</p>
        </div>

        <div className="message-body">
          <p>{this.props.review.rating} / 5</p>
          <p>{this.props.review.content}</p>
        </div>
      </div>
    );
  }
}

export default Review;