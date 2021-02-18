const database = "http://localhost:3001"
const axios = require('axios');


const api = axios.create({
    baseURL: database,
    timeout: 1000,
   
  });


  module.exports = api;