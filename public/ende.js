function again() {
  window.location.href = "quiz.html";
}

function home() {
  window.location.href = "index.html";
}

const urlParams = new URLSearchParams(window.location.search);

const korrektCounter = urlParams.get("korrektCounter");

function displayEnde(x) {
  document.getElementById(
    "ergebnis"
  ).innerText = `Du hast ${korrektCounter} von 10 richtig beantwortet.`;
}

displayEnde(korrektCounter);
