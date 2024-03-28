const express = require("express");
const app = express();
const port = process.env.PORT || 1870;



//app.use(express.static("public"));

app.get('/Hallo', (req, res) => {
  res.send("Hallo");
});


app.listen(port, (error) => {
  if (error) {
    console.log("Something went wrong", error);
  } else {
    console.log(`Server is listening http://127.0.0.1:${port}`);
  }
});


/*
server.get('/api/start', (req, res) =>{
  res.sendFile(path.join(__dirname, 'public/quiz.html'))
})
*/
/*
server.use((req, res) => {
  res.status(404);
  res.send("<h1>Error 404: Resource not found</h1>");
});
*/

module.exports = app;
