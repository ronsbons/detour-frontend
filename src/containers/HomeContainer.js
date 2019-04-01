import React, { Component } from 'react';

import Carousel from '../components/Carousel/Carousel.js';
import About from '../components/About.js';
import Location from '../components/Location/Location.js';

class HomeContainer extends Component {
  // [] FIGURE OUT IMAGE PATHS
  state = {
    regions: [
      {
        locationName: 'Africa',
        locationPhoto: '../images/sho-hatakeyama-117306-unsplash.jpg'
      },
      {
        locationName: 'Asia',
        locationPhoto: '../images/lisheng-chang-396821-unsplash.jpg'
      },
      {
        locationName: 'Australia',
        locationPhoto: '../images/christopher-burns-429015-unsplash.jpg'
      },
      {
        locationName: 'Europe',
        locationPhoto: '../images/jack-ward-522993-unsplash.jpg'
      },
      {
        locationName: 'North America',
        locationPhoto: '../images/guillaume-jaillet-421771-unsplash.jpg'
      },
      {
        locationName: 'South America',
        locationPhoto: '../images/agustin-diaz-185846-unsplash.jpg'
      }
    ]
  };

  render() {
    return (
      <div>
        <Carousel />
        <div className="home-content">
          <About />
          <Location locations={this.state.regions} />
        </div>
      </div>
    );
  }
}

export default HomeContainer;
