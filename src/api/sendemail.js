import axios from 'axios';

const URL = 'http://localhost:8787/send-email';

export default {
  sendemail: data => {
    return axios.post(URL, data);
  }
} 
