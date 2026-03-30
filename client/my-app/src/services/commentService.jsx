import Axios from "axios";

const API = "http://localhost:3001";

export async function getComments() {
    const response = await Axios.get(`${API}/comments`);
    return response.data;
}

export async function createComment(newComment) {
    const response = await Axios.post(`${API}/createComment`, newComment);
    return response.data;
}