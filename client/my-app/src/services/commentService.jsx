const API_URL = "https://blstudio-a2ed.onrender.com";

export async function getComments() {
    const response = await fetch(API_URL + "/api/comments");

    if (!response.ok) {
        throw new Error("Failed to load comments");
    }

    const data = await response.json();
    return data;
}

export async function createComment(commentData) {
    const response = await fetch(API_URL + "/api/comments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(commentData)
    });

    if (!response.ok) {
        throw new Error("Failed to create comment");
    }

    const data = await response.json();
    return data;
}