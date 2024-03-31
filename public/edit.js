document.getElementById("back").addEventListener("click", function () {
  window.location.href = "adminpanel.html";
});

document.addEventListener("DOMContentLoaded", function() {
  fetch("http://localhost:3000/questions/")
      .then(response => {
          if (!response.ok) {
              throw new Error("Network response was not ok");
          }
          return response.json();
      })
      .then(data => {
          //displayData(data);
          console.log(data);
      })
      .catch(error => {
          console.error("Error fetching data:", error);
      });
});