const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config({ path: "./dev.env" });

app.use(cors());
app.use(express.json());

const _PORT = process.env.PORT || 3001;

//-------Database Connection--------
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;

mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.8evtusf.mongodb.net/${database}`)
.then(function () {
    console.log("MongoDB connected");
})
.catch(function (error) {
    console.log("MongoDB connection error");
    console.log(error);
});

// import models
const CommentModel = require("./models/Comments");
const ContactModel = require("./models/Contacts");

//-----------------------

// GET comments
app.get("/comments", async function (req, res) {
    try {
        const comments = await CommentModel.find();
        res.json(comments);
    }
    catch (error) {
        res.status(500).json({ message: "Error loading comments" });
    }
});

// POST comment
app.post("/createComment", async function (req, res) {
    try {
        const newComment = new CommentModel(req.body);
        await newComment.save();
        res.json(newComment);
    }
    catch (error) {
        res.status(500).json({ message: "Error creating comment" });
    }
});

// POST contact
app.post("/createContact", async function (req, res) {
    try {
        const newContact = new ContactModel(req.body);
        await newContact.save();
        res.json(newContact);
    }
    catch (error) {
        res.status(500).json({ message: "Error submitting contact form" });
    }
});

app.listen(_PORT, function () {
    console.log("server is good!!");
});