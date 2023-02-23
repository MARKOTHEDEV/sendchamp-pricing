import axios from 'axios'





export const url = 'https://api.sendchamp.com'


const api =axios.create({
    baseURL: url,
  });
  
  export default api
  

  