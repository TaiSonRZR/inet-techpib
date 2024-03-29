const mongoose = require("mongoose");

//QUESTION SCHEMA
/*
    TITEL - HEADER QUESTION TITEL
    QUESTION - QUESTIONTEXT
    ANSWER - BOOLEAN TRUE OR FALSE
*/
const questionSchema = new mongoose.Schema({
  titel: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Question", questionSchema);
