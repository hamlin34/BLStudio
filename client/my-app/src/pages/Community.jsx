import "../styles/Community.css";
import { useState, useEffect } from "react";
import { getComments, addComment } from "../services/commentService";

function Community() {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    const [activeTab, setActiveTab] = useState("All");
    const [selectedCategory, setSelectedCategory] = useState("Feedback");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [commentText, setCommentText] = useState("");
    const [agreed, setAgreed] = useState(false);

    const tabs = ["All", "Feedback", "Ideas", "Questions", "General"];
    const categories = ["Feedback", "Ideas", "Questions", "General"];

    useEffect(function () {
        loadComments();
    }, []);

    async function loadComments() {
        try {
            const response = await getComments();
            setComments(response.data);
        } catch (error) {
            console.log("Error loading comments");
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    function handleCategoryClick(category) {
        setSelectedCategory(category);
        setDropdownOpen(false);
    }

    let filteredComments = comments;

    if (activeTab !== "All") {
        filteredComments = comments.filter(function (comment) {
            if (comment.category) {
                return comment.category === activeTab;
            }
            return activeTab === "General";
        });
    }

    async function handleSubmit(event) {
        event.preventDefault();

        console.log("Submitting comment");

        if (displayName.trim() === "") {
            alert("Please enter a display name.");
            return;
        }

        if (commentText.trim() === "") {
            alert("Please enter a comment.");
            return;
        }

        if (agreed === false) {
            alert("Please agree to the community guidelines.");
            return;
        }

        try {
            const response = await addComment({
                name: displayName,
                message: commentText
            });

            console.log("Saved comment:", response.data);

            setComments([response.data, ...comments]);
            setDisplayName("");
            setEmail("");
            setSelectedCategory("Feedback");
            setCommentText("");
            setAgreed(false);
        } catch (error) {
            console.log("Error creating comment");
            console.log(error);
        }
    }

    return (
        <div className="community-page">
            <div className="community-header">
                <h1>Community</h1>

                <p className="community-subtitle">
                    A moderated space for thoughtful feedback, ideas, and discussion.
                </p>

                <p className="community-rules">
                    Comments are reviewed. Be respectful. No hate speech, harassment, or spam.
                </p>
            </div>

            <div className="community-divider"></div>

            <div className="community-container">
                <form className="community-form" onSubmit={handleSubmit}>
                    <h2>Leave a Comment</h2>

                    <div className="community-field">
                        <label>Display Name <span>*</span></label>
                        <input
                            type="text"
                            value={displayName}
                            onChange={function (event) {
                                setDisplayName(event.target.value);
                            }}
                        />
                    </div>

                    <div className="community-field">
                        <label>Email (optional) <span className="optional">(won't be shown publicly)</span></label>
                        <input
                            type="email"
                            value={email}
                            onChange={function (event) {
                                setEmail(event.target.value);
                            }}
                        />
                    </div>

                    <div className="community-field">
                        <label>Category <span>*</span></label>

                        <div className="custom-dropdown">
                            <button
                                type="button"
                                className="dropdown-toggle"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                            >
                                <span>{selectedCategory}</span>
                                <span className={dropdownOpen ? "dropdown-arrow open" : "dropdown-arrow"}></span>
                            </button>

                            {dropdownOpen && (
                                <div className="dropdown-menu">
                                    {categories.map(function (category) {
                                        return (
                                            <button
                                                key={category}
                                                type="button"
                                                className={
                                                    category === selectedCategory
                                                        ? "dropdown-item selected"
                                                        : "dropdown-item"
                                                }
                                                onClick={() => handleCategoryClick(category)}
                                            >
                                                {category}
                                            </button>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="community-field">
                        <label>Comment</label>
                        <textarea
                            value={commentText}
                            onChange={function (event) {
                                setCommentText(event.target.value);
                            }}
                        ></textarea>
                    </div>

                    <div className="community-checkbox">
                        <input
                            type="checkbox"
                            checked={agreed}
                            onChange={function (event) {
                                setAgreed(event.target.checked);
                            }}
                        />
                        <span>I agree to the community guidelines.</span>
                    </div>

                    <button className="community-btn" type="submit">
                        Post Comment
                    </button>
                </form>

                <div className="community-comments">
                    <div className="community-tabs">
                        {tabs.map(function (tab) {
                            return (
                                <span
                                    key={tab}
                                    className={activeTab === tab ? "active" : ""}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </span>
                            );
                        })}
                    </div>

                    {loading ? (
                        <p className="loading">Loading comments...</p>
                    ) : filteredComments.length > 0 ? (
                        filteredComments.map(function (comment) {
                            return (
                                <div className="comment-card" key={comment._id}>
                                    <div className="comment-top">
                                        <div className="comment-user">
                                            <h3>{comment.name}</h3>
                                            <span className="comment-tag">
                                                {comment.category || "General"}
                                            </span>
                                        </div>

                                        <span className="comment-time">
                                            {new Date(comment.createdAt).toLocaleString()}
                                        </span>
                                    </div>

                                    <p className="comment-text">
                                        {comment.message}
                                    </p>

                                    <span className="comment-report">
                                        Report —
                                    </span>
                                </div>
                            );
                        })
                    ) : (
                        <div className="comment-card">
                            <p>No comments in this category yet.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Community;