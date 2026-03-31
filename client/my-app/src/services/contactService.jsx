const API_URL = "https://blstudio-a2ed.onrender.com";

export async function submitContactForm(formData) {
    const response = await fetch(API_URL + "/api/contacts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    });

    if (!response.ok) {
        throw new Error("Failed to submit contact form");
    }

    const data = await response.json();
    return data;
}