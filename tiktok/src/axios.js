import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok-clone-1.herokuapp.com/",
});

export default instance;
