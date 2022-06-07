const axios = require('axios');

export async function loginUser(credentials) {
    return axios.post('http://localhost:8080/login', credentials)
    .then((res) =>{
      console.log(res);  
    });
}

export async function fetchRooms() {
  let res = await axios.get('http://localhost:8080/getRooms');
  return res.data;
}

export async function fetchMessages(roomId) {
  let res = await axios.get(`http://localhost:8080/getMessages/${roomId}`);
  return res.data;
}