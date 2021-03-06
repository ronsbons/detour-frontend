import axios from 'axios';

// const endPoint = 'http://localhost:3001/reviews';
const endPoint = 'https://sheltered-shore-25414.herokuapp.com/reviews';

class ReviewModel {
  static getReviewsByCountry(countryId) {
    let request = axios.get(`${endPoint}/country/${countryId}`);
    console.log(`getReviewsByCountry request: ${request}`);
    return request;
  };

  // =====================  user auth required =====================
  static addReview(content, rating, userId, countryId) {
    // send review info to route to create a review
    let request = axios({
      method: 'POST',
      url: `${endPoint}`,
      data: {
        // "content:" is property key in review model
        // ": content" is argument passed into function
        content: content,
        rating: rating,
        user_id: userId,
        country_id: countryId 
      },
      // adds jwt token to request.headers
      headers: { authorization: `Bearer ${localStorage.token}`},
    });
    // [] WHY ARE THESE UNDEFINED BUT REQUEST IS SUCCESSFULLY GOING THROUGH?
    // console.log(`addReview request: ${request.data}`);
    // console.log(`addReview request.body.user_id ${request.body.user_id}`);
    return request;
  };

  // send review info to route to update
  static editReview(reviewId, content, rating) {
    let request = axios({
      method: 'PUT',
      url: `${endPoint}/${reviewId}`,
      data: {
        content: content,
        rating: rating,
      },
      // adds jwt token to request.headers
      headers: { authorization: `Bearer ${localStorage.token}`},
    })
    console.log(`editReview request: ${request}`);
    return request;
  };

  static deleteReview(reviewId) {
    let request = axios({
      method: 'DELETE',
      url: `${endPoint}/${reviewId}`,
      // adds jwt token to request.headers
      headers: { authorization: `Bearer ${localStorage.token}`},
    })
    console.log(`deleteReview request: ${request}`);
    return request;
  };

  static getReviewsByUser(userId) {
    let request = axios({
      method: 'GET',
      url: `${endPoint}/user/${userId}`,
      // adds jwt token to request.headers
      headers: { authorization: `Bearer ${localStorage.token}`},
    });
    console.log(`getReviewsByUser request: ${request}`);
    return request;
  };
};

export default ReviewModel;