import "../styles/Contact.css";
import { useState } from "react";
import { addContact } from "../services/contactService";

function Contact() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [requestType, setRequestType] = useState("Business Inquiry");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [platformUsername, setPlatformUsername] = useState("");
    const [budgetRange, setBudgetRange] = useState("");
    const [preferredContactMethod, setPreferredContactMethod] = useState("Email");
    const [statusMessage, setStatusMessage] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        if (fullName && email && subject && message) {
            addContact({
                name: fullName,
                email: email,
                message: message
            })
                .then(function () {
                    setStatusMessage("Request submitted successfully.");
                    setFullName("");
                    setEmail("");
                    setRequestType("Business Inquiry");
                    setSubject("");
                    setMessage("");
                    setPlatformUsername("");
                    setBudgetRange("");
                    setPreferredContactMethod("Email");
                })
                .catch(function (error) {
                    console.log("Error submitting contact form", error);
                    setStatusMessage("There was an error submitting your request.");
                });
        } else {
            setStatusMessage("Please fill in all required fields.");
        }
    }

    return (
        <div className="contact-page">
            <div className="contact-header">
                <h1>Contact</h1>
                <p className="contact-subtitle">
                    Reach out for business inquiries, collaborations, sponsorships,
                    studio questions, or general feedback.
                </p>
            </div>

            <div className="page-divider">
                <span className="divider-mark"></span>
            </div>

            <div className="contact-grid">
                <div className="contact-info-card">
                    <h2>Get in Touch</h2>

                    <p>
                        Whether you're reaching out for a business opportunity,
                        collaboration, sponsorship, or just want to send a message,
                        this form is the best way to connect with BL Studio.
                    </p>

                    <div className="contact-info-block">
                        <h3>Email</h3>
                        <p>BLAndrew575@gmail.com</p>
                    </div>

                    <div className="contact-info-block">
                        <h3>Response Time</h3>
                        <p>Most requests are reviewed within 3–5 business days.</p>
                    </div>

                    <div className="contact-info-block">
                        <h3>Use This Form For</h3>
                        <ul>
                            <li>Business inquiries</li>
                            <li>Brand deals and sponsorships</li>
                            <li>Community questions</li>
                            <li>General contact and feedback</li>
                        </ul>
                    </div>
                </div>

                <div className="contact-form-card">
                    <h2>Contact Form</h2>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="contact-field">
                            <label>Full Name <span>*</span></label>
                            <input
                                type="text"
                                value={fullName}
                                onChange={function (e) {
                                    setFullName(e.target.value);
                                }}
                            />
                        </div>

                        <div className="contact-field">
                            <label>Email Address <span>*</span></label>
                            <input
                                type="email"
                                value={email}
                                onChange={function (e) {
                                    setEmail(e.target.value);
                                }}
                            />
                        </div>

                        <div className="contact-field">
                            <label>Request Type</label>
                            <select
                                value={requestType}
                                onChange={function (e) {
                                    setRequestType(e.target.value);
                                }}
                            >
                                <option>Business Inquiry</option>
                                <option>Collaboration</option>
                                <option>Sponsorship</option>
                                <option>General Feedback</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="contact-field">
                            <label>Platform / Username</label>
                            <input
                                type="text"
                                value={platformUsername}
                                onChange={function (e) {
                                    setPlatformUsername(e.target.value);
                                }}
                            />
                        </div>

                        <div className="contact-field">
                            <label>Budget Range (if applicable)</label>
                            <input
                                type="text"
                                placeholder="Optional"
                                value={budgetRange}
                                onChange={function (e) {
                                    setBudgetRange(e.target.value);
                                }}
                            />
                        </div>

                        <div className="contact-field">
                            <label>Preferred Contact Method</label>
                            <select
                                value={preferredContactMethod}
                                onChange={function (e) {
                                    setPreferredContactMethod(e.target.value);
                                }}
                            >
                                <option>Email</option>
                                <option>Discord</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="contact-field">
                            <label>Subject <span>*</span></label>
                            <input
                                type="text"
                                value={subject}
                                onChange={function (e) {
                                    setSubject(e.target.value);
                                }}
                            />
                        </div>

                        <div className="contact-field">
                            <label>Message <span>*</span></label>
                            <textarea
                                value={message}
                                onChange={function (e) {
                                    setMessage(e.target.value);
                                }}
                            ></textarea>
                        </div>

                        <button type="submit" className="contact-btn">
                            Submit Request
                        </button>
                    </form>

                    {statusMessage && (
                        <p className="form-status">
                            {statusMessage}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Contact;