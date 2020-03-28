import axios from 'axios';

const URL = 'http://web-server.oleg-dev.com:6565/send-email';

export default {
  sendemail: data => {
    const request = axios.post(URL, data);
    return request;
  }
} 
