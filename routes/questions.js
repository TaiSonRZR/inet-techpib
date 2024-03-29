const express = require("express");
const router = express.Router();
const Question = require("../models/question");

//GET ALL QUESTIONS
router.get("/", async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//GET QUESTION BY ID
router.get("/:id", async (req, res) => {
  try {
    const question = await Question.findById(id);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//CREATE QUESTION
router.post("/", async (req, res) => {
  const question = new Question({
    title: req.body.title,
    question: req.body.question,
    answer: req.body.answer
  });
  try {
    const newQuestion = await question.save();
    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
//UPDATE ONE
router.patch("/:id", (req, res) => {});
//DELETE ONE
router.delete("/:id", (req, res) => {});

module.exports = router;
