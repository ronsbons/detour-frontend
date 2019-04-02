import React, { Component } from 'react';

import Carousel from '../components/Carousel/Carousel.js';
import About from '../components/About.js';
import RegionSquare from '../components/Location/RegionSquare';

class HomeContainer extends Component {
  // [] FIGURE OUT IMAGE PATHS
  state = {
    regions: [
      {
        _id: 1,
        regionName: 'Africa',
        regionPhoto: '/src/images/sho-hatakeyama-117306-unsplash.jpg'
      },
      {
        _id: 2,
        regionName: 'Asia',
        regionPhoto: '/src/images/lisheng-chang-396821-unsplash.jpg'
      },
      {
        _id: 3,
        regionName: 'Australia',
        regionPhoto: '/src/images/christopher-burns-429015-unsplash.jpg'
      },
      {
        _id: 4,
        regionName: 'Europe',
        regionPhoto: '/src/images/jack-ward-522993-unsplash.jpg'
      },
      {
        _id: 5,
        regionName: 'North America',
        regionPhoto: '/src/images/guillaume-jaillet-421771-unsplash.jpg'
      },
      {
        _id: 6,
        regionName: 'South America',
        regionPhoto: '/src/images/agustin-diaz-185846-unsplash.jpg'
      }
    ]
  };

  render() {
    return (
      <div>
        <Carousel />
        <div className="home-content">
          <About />
          <RegionSquare regions={this.state.regions} />
        </div>
      </div>
    );
  }
}

export default HomeContainer;
