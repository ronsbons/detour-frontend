import axios from 'axios';

// const endPoint = 'http://localhost:3001/country';
const endPoint = 'http://sheltered-shore-25414.herokuapp.com/country';

class CountryModel {
  static getAllCountries() {
    let request = axios.get(`${endPoint}`);
    console.log(`getAllCountries request: ${request}`);
    return request;
  };

  static getCountriesByRegion(regionId) {
    // axios call path matches backend routes
    let request = axios.get(`${endPoint}/region/${regionId}`);
    console.log(`getCountriesByRegion request: ${request}`)
    return request;
  };
};

export default CountryModel