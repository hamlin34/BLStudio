import "../styles/Community.css";
import { useState, useEffect } from "react";
import { getComments, addComment } from "../services/commentService";

function Community() {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    const [activeTab, setActiveTab] = useState("All");
    const [selectedCategory, setSelectedCategory] = useState("Feedback");

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
                email: email,
                category: selectedCategory,
                message: commentText
            });

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

                <div className="community-cta">
                    <a
                        href="https://discord.com/invite/eqxzf6FsNC"
                        target="_blank"
                        rel="noreferrer"
                        className="community-join-btn"
                    >
                        Join Community
                    </a>
                </div>

                <div className="guidelines-card">
                    <h3 className="guidelines-title">Community Guidelines</h3>

                    <ul className="community-guidelines">
                        <li>Be respectful to others at all times</li>
                        <li>No hate speech, harassment, or personal attacks</li>
                        <li>No spam, self-promotion, or misleading content</li>
                        <li>Keep discussions relevant and constructive</li>
                        <li>Moderators may remove content at their discretion</li>
                    </ul>
                </div>
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
                        <label>Email (optional)</label>
                        <input
                            type="email"
                            value={email}
                            onChange={function (event) {
                                setEmail(event.target.value);
                            }}
                        />
                    </div>

                    <div className="community-field">
                        <label>Category</label>
                        <select
                            className="community-select"
                            value={selectedCategory}
                            onChange={function (event) {
                                setSelectedCategory(event.target.value);
                            }}
                        >
                            {categories.map(function (category) {
                                return (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                );
                            })}
                        </select>
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
                                    onClick={function () {
                                        setActiveTab(tab);
                                    }}
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
                                        <div>
                                            <h3>{comment.name}</h3>
                                            <span className="comment-tag">
                                                {comment.category || "General"}
                                            </span>
                                        </div>

                                        <span className="comment-time">
                                            {new Date(comment.createdAt).toLocaleString()}
                                        </span>
                                    </div>

                                    <p>{comment.message}</p>

                                    <span className="comment-report">
                                        Report —
                                    </span>
                                </div>
                            );
                        })
                    ) : (
                        <div className="comment-card">
                            <p>No comments yet.</p>
                        </div>
                    )}

                    <div className="community-cta">
                        <a
                            href="https://discord.com/invite/eqxzf6FsNC"
                            target="_blank"
                            rel="noreferrer"
                            className="community-join-btn"
                        >
                            Join Community
                        </a>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Community;