require("dotenv").config();

const express = require("express");
const app = express();
const { MongoClient, ServerApiVersion } = require("mongodb");
const mongoose = require("mongoose");
//const uri = process.env.DATABASE_URL;

// DATABASE CONNECTION AND SETTINGS
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error());
db.once("open", () => console.log("Connected to database"));

//app.get("/", (req, res) => res.send("Express on Vercel"));

// SENDING FRONTEND

app.use(express.static("public"));

// API'S

const questionsRouter = require("./routes/questions");

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
