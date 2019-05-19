import axios from 'axios';
export const requireLogin = (userData) => {
  axios.post('http://localhost:3001/api/login',userData)
      .then(res=>{
      });
};