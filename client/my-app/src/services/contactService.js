import axios from "axios";

const API_URL = "https://blstudio-a2ed.onrender.com/contacts";

const addContact = (contactData) => {
  return axios.post(API_URL, contactData);
};

export { addContact };