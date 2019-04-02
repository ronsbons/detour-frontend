import axios from 'axios';

const endPoint = 'http://localhost:3001/tours';

class TourModel {
  static getToursByCountry(countryId) {
    let request = axios.get(`${endPoint}/country/${countryId}`);
    console.log(`getToursByCountry request: ${request}`);
    return request;
  };
};

export default TourModel