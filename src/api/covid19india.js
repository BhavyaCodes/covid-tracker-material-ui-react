const axios = require("axios");

const instance = axios.create({
  baseURL: "https://api.covid19india.org",
});

export default instance;
