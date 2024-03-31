document.getElementById("back").addEventListener("click", function () {
  window.location.href = "adminpanel.html";
});

let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  let formData = new FormData(form);
  let data = Object.fromEntries(formData);
  let jsonData = JSON.stringify(data);
  event.preventDefault();
  fetch("/questions/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonData,
  });
  alert("Frage erfolgreich hinzugefügt!");
  clearForm();
}

function clearForm() {
  var inputs = form.getElementsByTagName("input");
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type === "text") {
      inputs[i].value = ""; // Leere Texteingabefelder
    } else if (inputs[i].type === "radio") {
      inputs[i].checked = false; // Hebe Auswahl der Radio-Buttons auf
    }
  }
}
