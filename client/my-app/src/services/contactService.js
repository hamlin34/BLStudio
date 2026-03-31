import axios from "axios";

const API_URL = "https://blstudio1.onrender.com/contacts";

const addContact = (contactData) => {
  return axios.post(API_URL, contactData);
};

export { addContact };