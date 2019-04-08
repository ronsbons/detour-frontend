import axios from 'axios';

const endPoint = 'http://localhost:3001/user';

class UserModel {
  static signUp(username, email, password) {
    let request = axios.post(`${endPoint}/signup`, {
      // ": username" is the argument passed into the function
      username: username,
      email: email,
      password: password
    });
    console.log(`signUp request: ${request}`);
    return request;
  };

  static login(username, password) {
    let request = axios.post(`${endPoint}/login`, {
      // ": username" is the argument passed into the function
      username: username,
      password: password,
    });
    console.log(`login request: ${request}`);
    return request;
  };

  // =====================  user auth required =====================
  static getUserInfo(userId) {
    let request = axios({
      method: 'GET',
      url: `${endPoint}/${userId}`,
      // adds jwt token to request.headers
      headers: { authorization: `Bearer ${localStorage.token}`},
    });
    console.log(`getUserInfo request: ${request}`);
    return request;
  };

  static editUser(userId, username, email) {
    let request = axios({
      method: 'PUT',
      url: `${endPoint}/${userId}`,
      data: {
        // ": username" is the argument passed into the function
        username: username,
        email: email,
      },
      // adds jwt token to request.headers
      headers: { authorization: `Bearer ${localStorage.token}`},
    });
    console.log(`editUser request: ${request}`);
    return request;
  };
  
  static addSavedTour(userId, savedTourId) {
    let request = axios({
      method: 'PUT',
      url: `${endPoint}/${userId}/add-saved-tour`,
      data: {
        saved_tour_id: savedTourId
      },
      // adds jwt token to request.headers
      headers: { authorization: `Bearer ${localStorage.token}`},
    });
    console.log(`addSavedTour request: ${request}`);
    return request;
  };

  static removeSavedTour(userId, savedTourId) {
    let request = axios({
      method: 'PUT',
      url: `${endPoint}/${userId}/remove-saved-tour`,
      data: {
        saved_tour_id: savedTourId,
      },
      // adds jwt token to request.headers
      headers: { authorization: `Bearer ${localStorage.token}`},
    });
    console.log(`removeSavedTour request: ${request}`);
    return request;
  };
};

export default UserModel;