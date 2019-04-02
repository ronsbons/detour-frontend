import axios from 'axios';

const endPoint = 'http://localhost:3001/country';

class CountryModel {
  static getCountriesByRegion(regionId) {
    let request = axios.get(`${endPoint}/${regionId}`);
    console.log(`getCountriesByRegion request: ${request}`)
    return request;
  };
};

export default CountryModel