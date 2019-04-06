import React, { Component } from 'react';

import { connect } from 'react-redux';

import UserModel from '../models/UserModel.js';

class SavedTours extends Component {
  handleRemove = (event) => {
    event.preventDefault();
    console.log(`in handleRemove`);
    this.props.removeTour(this.props.user._id, this.props.tour._id);
  };

  render() {
    return (
      <div className="column is-one-third">
        <div className="card">
          <div className="card-image">
            <figure className="image is-128x128">
              <a href={this.props.tour.link}>
                {/* [] MAKE IMAGE COMPANY LOGO FOR NOW */}
                {/* [] WANT TO MAKE IMAGE THE COUNTRY PHOTO. HAVE TO POPULATE COUNTRY INFO FROM SAVED_TOUR_ID.PRIMARY_COUNTRY_ID */}
                <img src={this.props.tour.company} alt={this.props.tour.name} />
              </a>
            </figure>
          </div>

          <div className="card-content">
            <a href={this.props.tour.link}><h5 className="subtitle is-5">{this.props.tour.name}</h5></a>
          </div>

          <footer className="card-footer">
            <button className="card-footer-item" onClick={this.handleRemove}>Remove</button>
          </footer>
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
)(SavedTours);