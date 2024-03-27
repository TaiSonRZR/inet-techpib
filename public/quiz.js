const fragen = [
  { text: "Ist die Sonne heiß?", antwort: true },
  { text: "Ist Wasser nass?", antwort: true },
  { text: "Hat ein Hund vier Beine?", antwort: true },
  { text: "Ist Schnee kalt?", antwort: true },
  { text: "Kann ein Vogel fliegen?", antwort: true },
  { text: "Ist die Erde rund?", antwort: true },
  { text: "Sind Bananen gelb?", antwort: true },
  { text: "Können Fische schwimmen?", antwort: true },
  { text: "Ist Zucker süß?", antwort: true },
  { text: "Ist Gras grün?", antwort: true },
  { text: "Ist der Himmel pink?", antwort: false },
  { text: "Ist ein Auto ein Tier?", antwort: false },
  { text: "Fließt Wasser bergauf?", antwort: false },
  { text: "Ist der Mond aus Käse?", antwort: false },
  { text: "Kann ein Fisch Fahrrad fahren?", antwort: false }
];

function antwort(x) {
  n++;
  if (n < anzahlfragen) {
    if (x == fragen[n].antwort) {
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
  document.getElementById("questiontext").innerText = `${fragen[n].text}`;
  document.getElementById("count").innerText = `Frage ${n+1} von ${anzahlfragen}`;
  
}

const btn_true = document.getElementById("true");

refresh();

//document.getElementById("true").addEventListener("click", antwort(true))
//document.getElementById("false").addEventListener("click", antwort(false))
