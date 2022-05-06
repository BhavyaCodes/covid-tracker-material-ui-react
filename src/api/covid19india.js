const axios = require("axios");

const instance = axios.create({
  baseURL: "https://data.incovid19.org",
});

export default instance;
