const axios = require('axios');

export async function loginUser(credentials) {
    return axios({
      method: 'post',
      url: 'http://localhost:8080/login',
      data: { credentials }
    });
}