import React, { Component } from 'react';

import { connect } from 'react-redux';

// import any model needed for axios calls
import UserModel from '../models/UserModel.js';


class Tour extends Component {
  saveTour = (event) => {
    event.preventDefault();
    console.log(event);
    UserModel.addSavedTour(this.props.user._id, this.props.tour._id)
      // response will be updated user
      .then( (response) => {
        console.log(`saveTour response: ${response.data}`);
        // [] NEED USER-FACING MESSAGE LIKE "TOUR SAVED!"
        // [] COULD IT OPEN A MODAL?
      }).catch( (error) => {
        console.log(`saveTour error: ${error}`);
        // [] NEED USER-FACING ERROR MESSAGE
      });
  };

  render() {
    // show Save to Wish List button if user is logged in
    let saveTourButton = [];

    if (this.props.user.isLoggedIn) {
      saveTourButton.push(
        <button onClick={this.saveTour} key="save-button">Save to Wish List</button>
      );
    };

    return (
      <div className="column is-one-fifth">
        <div className="tour-cell">
          <figure className="image is-128x128">
            <img src={this.props.tour.company} alt="tour company logo" />
          </figure>
        </div>

        <div className="tour-cell">
          <h6 className="subtitle is-6"><a href={this.props.tour.link}>{this.props.tour.name}</a></h6>
        </div>

        <div className="tour-cell">
          <h6 className="subtitle is-6">{this.props.tour.length} days</h6>
        </div>

        <div className="tour-cell">
          <h6 className="subtitle is-6">from {this.props.tour.cost}</h6>
        </div>

        <div className="tour-cell">
          <h6 className="subtitle is-6">{this.props.tour.countries_visited}</h6>
        </div>
        
        { saveTourButton }
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
)(Tour);