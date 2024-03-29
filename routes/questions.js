const express = require("express");
const router = express.Router();

//GET ALL
router.get("/", (req, res) => {
  res.send("Hello");
});
//GET ONE
router.get("/:id", (req, res) => {
  req.params.id;
});

//CREATE ONE
router.post("/", (req, res) => {});
//UPDATE ONE
router.patch("/:id", (req, res) => {});
//DELETE ONE
router.delete("/:id", (req, res) => {});

module.exports = router;
