const axios = require("axios");

const instance = axios.create({
  baseURL: "",
});

export default instance;
