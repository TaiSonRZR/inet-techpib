const express = require("express");
const path = require("path");
const port = process.env.PORT || 1870;
const { appendFile } = require("fs");

const app = express();

//server.use(express.static(path.join(__dirname, "public")));

//app.use(express.static("public"));

app.get("/home", (req, res) => {
  res.send("./public/index.html");
});
/*
server.get('/api/start', (req, res) =>{
  res.sendFile(path.join(__dirname, 'public/quiz.html'))
})
*/

app.listen(port, (error) => {
  if (error) {
    console.log("Something went wrong", error);
  } else {
    console.log(`Server is listening http://127.0.0.1:${port}`);
  }
});
/*
server.use((req, res) => {
  res.status(404);
  res.send("<h1>Error 404: Resource not found</h1>");
});
*/

module.exports = app;
