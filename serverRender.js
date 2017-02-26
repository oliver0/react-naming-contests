// fetch data from the apiRouter

import config from './config';
import axios from 'axios';

axios.get(`${config.serverUrl}/api/contests`)
  .then(resp => {
    console.log(resp.data);
  });
