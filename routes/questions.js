const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const Question = require("../models/question");

router.use(bodyParser.json());
//GET ALL QUESTIONS
router.get("/", async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//GET TEN QUIZ QUESTIONS
router.get("/quiz", async (req, res) => {
  try {
    let questions = [];

    const questionsAll = await Question.find();

    while (questions.length !== 10) {
      let rand = Math.floor(Math.random() * questionsAll.length);
      let randObj = questionsAll[rand];
      if (!questions.includes(randObj)) {
        questions.push(randObj);
      }
    }
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//GET QUESTION BY ID
router.get("/:id", getQuestion, (req, res) => {});

//CREATE QUESTION
router.post("/", async (req, res) => {
  const { title, questionText, answer } = req.body;
  const question = new Question({ title, questionText, answer });
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

async function getQuestion(req, res, next) {
  try {
    question = await Question.findById(req.params.id);
    if (question == null) {
      return res.status(404).json({ message: "Cannot find question" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  res.question = question;
  next();
}

module.exports = router;
