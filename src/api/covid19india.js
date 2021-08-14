const axios = require("axios");

const instance = axios.create({
  baseURL: "https://data.covid19india.org",
});

export default instance;
