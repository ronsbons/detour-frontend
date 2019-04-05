import axios from 'axios';

const endPoint = 'http://localhost:3001/reviews';

class ReviewModel {
  static getReviewsByCountry(countryId) {
    let request = axios.get(`${endPoint}/country/${countryId}`);
    console.log(`getReviewsByCountry request: ${request}`);
    return request;
  };

  static addReview(content, rating, userId, countryId) {
    // send review info to route to create a review
    // "content:" is property key in review model
    // ": content" is argument passed into function
    let request = axios.post(`${endPoint}`, {
      content: content,
      rating: rating,
      user_id: userId,
      country_id: countryId 
    });
    console.log(`addReview request: ${request}`);
    return request;
  };

  // send review info to route to update
  static editReview(reviewId, content, rating) {
    let request = axios.put(`${endPoint}/${reviewId}`, {
      content: content,
      rating: rating,
    });
    console.log(`editReview request: ${request}`);
    return request;
  };

  static deleteReview(reviewId) {
    let request = axios.delete(`${endPoint}/${reviewId}`);
    console.log(`deleteReview request: ${request}`);
    return request;
  };
};

export default ReviewModel;