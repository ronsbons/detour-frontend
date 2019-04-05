import axios from 'axios';

const endPoint = 'http://localhost:3001/user';

class UserModel {
  static signUp(username, email, password) {
    let request = axios.post(`${endPoint}/signup`, {
      username: username,
      email: email,
      password: password
    });
    console.log(`signUp request: ${request}`);
    return request;
  };

  static login(username, password) {
    let request = axios.post(`${endPoint}/login`, {
      username: username,
      password: password,
    });
    console.log(`login request: ${request}`);
    return request;
  };

  static addSavedTour(userId, savedTourId) {
    let request = axios.put(`${endPoint}/${userId}/add-saved-tour`, {
      saved_tour_id: savedTourId
    });
    console.log(`addSavedTour request: ${request}`);
    return request;
  };

  static getUserInfo(userId) {
    let request = axios.get(`${endPoint}/${userId}`);
    console.log(`getUserInfo request: ${request}`);
    return request;
  };

  static removeSavedTour(userId, savedTourId) {
    let request = axios.put(`${endPoint}/${userId}/remove-saved-tour`, {
      saved_tour_id: savedTourId,
    });
    console.log(`removeSavedTour request: ${request}`);
    return request;
  };
};

export default UserModel;