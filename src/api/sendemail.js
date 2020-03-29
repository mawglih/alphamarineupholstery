import axios from 'axios';

const URL = 'http://localhost:8787/send-email';

export default {
  sendemail: data => {
    const request = axios.post(URL, data);
    return request;
  }
} 
