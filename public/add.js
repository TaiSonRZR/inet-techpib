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
  fetch("https://long-red-housecoat.cyclic.app/questions/", {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: jsonData
  });
}
