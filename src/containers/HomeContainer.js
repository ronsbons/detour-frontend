import React, { Component } from 'react';

import Carousel from '../components/Carousel/Carousel.js';
import About from '../components/About.js';
import Location from '../components/Location/Location.js';

class HomeContainer extends Component {
  // [] FIGURE OUT IMAGE PATHS
  state = {
    regions: [
      {
        _id: 1,
        locationName: 'Africa',
        locationPhoto: '/src/images/sho-hatakeyama-117306-unsplash.jpg'
      },
      {
        _id: 2,
        locationName: 'Asia',
        locationPhoto: '/src/images/lisheng-chang-396821-unsplash.jpg'
      },
      {
        _id: 3,
        locationName: 'Australia',
        locationPhoto: '/src/images/christopher-burns-429015-unsplash.jpg'
      },
      {
        _id: 4,
        locationName: 'Europe',
        locationPhoto: '/src/images/jack-ward-522993-unsplash.jpg'
      },
      {
        _id: 5,
        locationName: 'North America',
        locationPhoto: '/src/images/guillaume-jaillet-421771-unsplash.jpg'
      },
      {
        _id: 6,
        locationName: 'South America',
        locationPhoto: '/src/images/agustin-diaz-185846-unsplash.jpg'
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
