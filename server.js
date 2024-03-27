const express = require("express");
const path = require("path");
const port = process.env.PORT || 1870;
const home = require("./public/index");
const { appendFile } = require("fs");

const server = express();

//server.use(express.static(path.join(__dirname, "public")));

server.use(express.json());

server.use("/home", home);
/*
server.get('/api/start', (req, res) =>{
  res.sendFile(path.join(__dirname, 'public/quiz.html'))
})
*/

server.listen(port, (error) => {
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
