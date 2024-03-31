document.getElementById("back").addEventListener("click", function () {
  window.location.href = "adminpanel.html";
});

document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:3000/questions/")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      displayData(data);
      console.log(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});

function displayData(data) {
  const list = document.getElementById("question-list");
  data.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<strong>${item.title}</strong>: ${
      item.questionText
    } - Antwort: ${item.answer ? "Ja" : "Nein"}`;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Löschen";
    deleteButton.addEventListener("click", function () {
      deleteItem(item); // Ruft die Funktion deleteItem auf, um das Element zu löschen
    });
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
  });
}
