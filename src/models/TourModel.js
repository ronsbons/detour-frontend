import axios from 'axios';

// const endPoint = 'http://localhost:3001/tours';
const endPoint = 'https://sheltered-shore-25414.herokuapp.com/tours';

class TourModel {
  static getToursByCountry(countryId) {
    let request = axios.get(`${endPoint}/country/${countryId}`);
    console.log(`getToursByCountry request: ${request}`);
    return request;
  };
};

export default TourModel