/*async function startQuiz() {
  try {
    const response = await fetch("http://localhost:3000/questions");
    if (!response.ok) {
      throw new Error("Could not start quiz");
    }
  } catch (error) {
    console.log(error);
  }
}

fetch("http://localhost:3000/questions")
  .then(res => res.json()) // Konvertiere die Antwort in JSON
  .then(data => {
    // Handle der empfangenen Daten
    console.log(data); // Hier kannst du mit den empfangenen Daten arbeiten
  })
  .catch(error => {
    console.error('Error:', error); // Handle von Fehlern, falls sie auftreten
  });
*/

document.getElementById("startquiz").addEventListener("click", function () {
  window.location.href = "quiz.html";
});

document
  .getElementById("adminpanel")
  .addEventListener("click", function fetchAdminpanel() {
    window.location.href = "adminpanel.html";
  });
