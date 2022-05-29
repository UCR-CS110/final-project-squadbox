const axios = require('axios');

export async function loginUser(credentials) {
    return axios.post('http://localhost:8080/login', credentials)
    .then((res) =>{
      console.log(res);  
    });
}