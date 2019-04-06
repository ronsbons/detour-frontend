import React, { Component } from 'react';

import { connect } from 'react-redux';

// import any model needed for axios calls
import UserModel from '../models/UserModel.js';


class Tour extends Component {
  // set local state for modal condition
  state = {
    isModalOpen: false,
    userMessage: ''
  };

  saveTour = (event) => {
    event.preventDefault();
    UserModel.addSavedTour(this.props.user._id, this.props.tour._id)
      // response will be updated user
      .then( (response) => {
        console.log(`saveTour response: ${response.data}`);
        // open modal
        this.setState({
          isModalOpen: true,
          userMessage: 'Tour saved!',
        });
      }).catch( (error) => {
        console.log(`saveTour error: ${error}`);
        this.setState({
          isModalOpen: true,
          userMessage: 'Something went wrong saving this tour...',
        });
      });
  };

  // define function for click event to change state to false
  closeModal = (event) => {
    event.preventDefault();
    this.setState({
      isModalOpen: false,
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
          <h6 className="subtitle is-6">{this.props.tour.countries_visited.join(', ')}</h6>
        </div>
        
        { saveTourButton }

        {/* put modal with save/error message */}
        <div className={ this.state.isModalOpen ? "modal is-active" : "modal" }>
          <div className="modal-background" onClick={this.closeModal}></div>
          <div className="modal-content">
            <h5 className="subtitle is-5">{this.state.userMessage}</h5>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={this.closeModal}></button>
        </div>  {/* end of modal div */}
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