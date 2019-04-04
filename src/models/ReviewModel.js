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
};

export default ReviewModel;