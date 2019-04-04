import axios from 'axios';

const endPoint = 'http://localhost:3001/reviews';

class ReviewModel {
  static addReview(content, rating, userId, countryId) {
    let request = axios.post(`${endPoint}`, {
      content: content,
      rating: rating,
      user_id: userId,
      country_id: countryId 
    });
    console.log(`addReview request: ${request}`);
    return request;
  };

  static getReviewsByCountry(countryId) {
    let request = axios.get(`${endPoint}/country/${countryId}`);
    console.log(`getReviewsByCountry request: ${request}`);
    return request;
  };
};

export default ReviewModel;