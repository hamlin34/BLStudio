import axios from "axios";

const API_URL = "https://blstudio1.onrender.com/comments";

const getComments = () => {
  return axios.get(API_URL);
};

const addComment = (commentData) => {
  return axios.post(API_URL, commentData);
};

export { getComments, addComment };