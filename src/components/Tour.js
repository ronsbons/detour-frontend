import React, { Component } from 'react';

class Tour extends Component {
  render() {
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
      </div>
    );
  }
}

export default Tour;