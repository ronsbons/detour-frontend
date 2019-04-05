import React, { Component } from 'react';

class SavedTours extends Component {
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
            <button className="card-footer-item">Remove</button>
          </footer>
        </div>
      </div>
    );
  }
}

export default SavedTours;