require("dotenv").config();

const express = require("express");
const app = express();
const { MongoClient, ServerApiVersion } = require("mongodb");
const mongoose = require("mongoose");
const uri = process.env.DATABASE_URL;
const client = new MongoClient(uri);
const PORT = process.env.PORT || 3000

// DATABASE CONNECTION AND SETTINGS
mongoose.connect(uri);
const db = mongoose.connection;
db.on("error", (error) => console.error());
db.once("open", () => console.log("Connected to database"));

//app.get("/", (req, res) => res.send("Express on Vercel"));

// SENDING FRONTEND

app.use(express.static("public"));

// API'S

const questionsRouter = require("./routes/questions");
app.use("/questions", questionsRouter);

client.connect(err => {
    if(err){ console.error(err); return false;}
    // connection to mongo is successful, listen for requests
    app.listen(PORT, () => {
        console.log("listening for requests");
    })
});

module.exports = app;
