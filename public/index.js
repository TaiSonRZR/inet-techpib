/*async function startQuiz() {
  try {
    const response = await fetch("http://localhost:1870/api/start");
    if (!response.ok) {
      throw new Error("Could not start quiz");
    }
  } catch (error) {
    console.log(error);
  }
}
*/

document.getElementById("startquiz").addEventListener("click", function () {
  window.location.href = "quiz.html";
});

document
  .getElementById("adminpanel")
  .addEventListener("click", function fetchAdminpanel() {
    window.location.href = "adminpanel.html";
  });
