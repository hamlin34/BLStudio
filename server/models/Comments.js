const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const CommentSchema = new Schema({
    displayName: { type: String },
    email: { type: String },
    category: { type: String },
    commentText: { type: String },
    createdAt: { type: String, default: "Just now" }
});

const CommentModel = mongoose.model("comments", CommentSchema);

module.exports = CommentModel;