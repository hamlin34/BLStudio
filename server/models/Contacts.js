const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const ContactSchema = new Schema({
    fullName: { type: String },
    email: { type: String },
    requestType: { type: String },
    subject: { type: String },
    message: { type: String },
    platformUsername: { type: String },
    budgetRange: { type: String },
    preferredContactMethod: { type: String }
});

const ContactModel = mongoose.model("contacts", ContactSchema);

module.exports = ContactModel;