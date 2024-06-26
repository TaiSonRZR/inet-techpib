const mongoose = require("mongoose");

//QUESTION SCHEMA
/*
    TITEL - HEADER QUESTION TITEL
    QUESTION - QUESTIONTEXT
    ANSWER - BOOLEAN TRUE OR FALSE
*/
const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  questionText: {
    type: String,
    required: true,
  },
  answer: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Question", questionSchema);
