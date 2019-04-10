import React, { Component } from 'react';

import { connect } from 'react-redux';

// import any nested component needed
import ReviewsList from '../components/Reviews/ReviewsList.js';
// import any model needed for axios calls
import TourModel from '../models/TourModel.js';
import UserModel from '../models/UserModel.js';


class CountryContainer extends Component {
  // set local state to hold the data received from axios call
  // set state in this component, because the data only needs to be accessed in this component
  state = {
    isModalOpen: false,
    tours: [],
    userMessage: '',
  };

  getTours = () => {
    TourModel.getToursByCountry(this.props.currentCountry.id)
      .then(response => {
        console.log(response.data);
        this.setState({
          tours: response.data
        });
      })
      .catch(error => {
        console.log(`CountryContainer error when getting tours by country: ${error}`);
        // [] NEED USER-FACING ERROR MESSAGE
      });
  };

  // get country's tours upon first visit/mount to '/country'
  componentDidMount() {
    this.getTours();
  };

  // perform axios call to get country's tours again when store/props (currentCountry) changes
  componentDidUpdate(prevProps) {
    if (this.props.currentCountry.id !== prevProps.currentCountry.id) {
      this.getTours();
    };
  };

  saveTour = (event) => {
    event.preventDefault();
    // event.target.id is the button's id which i've made equal to the tour._id
    UserModel.addSavedTour(this.props.user._id, event.target.id)
      .then( (response) => {
        console.log(`saveTour response: ${response.data}`);
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

  closeModal = (event) => {
    event.preventDefault();
    this.setState({
      isModalOpen: false,
    });
  };


  render() {
    let saveTourButton = [];

    if (this.props.user.isLoggedIn) {
      saveTourButton.push(
        this.state.tours.map(tour => (
          <td key={tour._id}>
            <button onClick={this.saveTour} id={tour._id} className="button is-primary">Save to Wish List</button>
          </td>
        ))
      );
    };

    return (
      <section className="country-container">
        <h3 className="subtitle is-3">{this.props.currentCountry.name}</h3>
        <div className="table-container">
          <table className="table">
            <tbody>
              <tr>
                <th>Company</th>
                {this.state.tours.map(tour => (
                  <td key={tour._id}>
                    <figure className="image is-128x128">
                      <img src={tour.company} alt="tour company logo" />
                    </figure>
                  </td>
                ))}
              </tr>

              <tr>
                <th>Tour Name</th>
                {this.state.tours.map(tour => (
                  <td key={tour._id}>
                    <h6 className="subtitle is-6"><a href={tour.link}>{tour.name}</a></h6>
                  </td>
                ))}
              </tr>

              <tr>
                <th>Length</th>
                {this.state.tours.map(tour => (
                  <td key={tour._id}>
                    <h6>{tour.length} days</h6>
                  </td>
                ))}
              </tr>

              <tr>
                <th>Cost</th>
                {this.state.tours.map(tour => (
                  <td key={tour._id}>
                    <h6>from {tour.cost}</h6>
                  </td>
                ))}
              </tr>

              <tr>
                <th>Countries Visited</th>
                {this.state.tours.map(tour => (
                  <td key={tour._id}>
                    <h6>{tour.countries_visited.join(', ')}</h6>
                  </td>
                ))}
              </tr>

              <tr>
                <th></th>
                { saveTourButton }
              </tr>

            </tbody>

          </table>
        </div>

        {/* modal to display success/error from saving tour */}
        <div className={ this.state.isModalOpen ? "modal is-active" : "modal" }>
          <div className="modal-background" onClick={this.closeModal}></div>
          <div className="modal-content">
            <h5 className="subtitle is-5 about-subtitle">{this.state.userMessage}</h5>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={this.closeModal}></button>
        </div>

        <ReviewsList />
      </section>
    );
  }
}


// puts the location object in store into this.props.currentCountry
const mapStateToProps = (store) => {
  return {
    currentCountry: store.location,
    user: store.user,
  };
};

// connects the store and added props to component to export
export default connect(
  mapStateToProps
)(CountryContainer);
