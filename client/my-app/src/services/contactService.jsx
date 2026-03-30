import Axios from "axios";

const API = "http://localhost:3001";

export async function submitContactForm(formData) {
    const response = await Axios.post(`${API}/createContact`, formData);
    return response.data;
}