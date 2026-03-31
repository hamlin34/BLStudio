const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const Comment = require("./models/Comment");
const Contact = require("./models/Contact");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.log("MongoDB connection error:");
    console.log(error);
  });

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/comments", async (req, res) => {
  try {
    const comments = await Comment.find().sort({ createdAt: -1 });
    res.json(comments);
  } catch (error) {
    console.log("Get comments error:", error);
    res.status(500).json({
      error: "Failed to get comments",
      details: error.message
    });
  }
});

app.post("/comments", async (req, res) => {
  try {
    console.log("Comment request body:", req.body);

    const name = req.body.name;
    const message = req.body.message;

    if (!name || !message) {
      return res.status(400).json({
        error: "Name and message are required"
      });
    }

    const newComment = new Comment({
      name: name,
      message: message
    });

    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (error) {
    console.log("Save comment error:", error);
    res.status(500).json({
      error: "Failed to save comment",
      details: error.message
    });
  }
});

app.get("/contacts", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    console.log("Get contacts error:", error);
    res.status(500).json({
      error: "Failed to get contacts",
      details: error.message
    });
  }
});

app.post("/contacts", async (req, res) => {
  try {
    console.log("Contact request body:", req.body);

    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    if (!name || !email || !message) {
      return res.status(400).json({
        error: "Name, email, and message are required"
      });
    }

    const newContact = new Contact({
      name: name,
      email: email,
      message: message
    });

    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (error) {
    console.log("Save contact error:", error);
    res.status(500).json({
      error: "Failed to save contact",
      details: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});