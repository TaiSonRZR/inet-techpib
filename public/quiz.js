let fragen = [
  { title: "xxx", questionText: "Frage1", answer: true },
  { title: "xxx", questionText: "Frage2", answer: true },
];

function antwort(x) {
  n++;
  if (n < fragen.length) {
    if (x == fragen[n].answer) {
      korrektCounter++;
    }
    refresh();
    console.log(x, n, fragen[n], korrektCounter);
  } else {
    window.location.href = `ende.html?korrektCounter=${korrektCounter}`;
  }
}
let n = 0;
let korrektCounter = 0;
const anzahlfragen = fragen.length;

function refresh() {
  document.getElementById(
    "questiontext"
  ).innerText = `${fragen[n].questionText}?`;
  document.getElementById("count").innerText = `Frage ${n + 1} von ${
    fragen.length
  }`;
}

const btn_true = document.getElementById("true");

refresh();

//document.getElementById("true").addEventListener("click", antwort(true))
//document.getElementById("false").addEventListener("click", antwort(false))

fetch("//https://inet-techpib.vercel.app/questions/quiz")
  .then((res) => res.json()) // Konvertiere die Antwort in JSON
  .then((data) => {
    console.log(data);
    fragen = data;
    refresh();
  })
  .catch((error) => {
    console.error("Error:", error); // Handle von Fehlern, falls sie auftreten
  });
