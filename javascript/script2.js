const przycJS = document.querySelector("#przycLatwy");
const przycHTML = document.querySelector("#przycSredni");
const przycCSS = document.querySelector("#przycTrudny");
const miejsceNaIimie = document.querySelector("#tuImie");

miejsceNaIimie.innerHTML += sessionStorage.imieGracza; //wstawiam sobie imie w miejsce

przycJS.addEventListener("click", function () { //dodatkowo resetuje wartosci aby mozna bylo zmienic poz trud, w przyszlosci pewnie zamiast poziomu trud beda rodzaje quizow rozne
  sessionStorage.iloscPkt = 0;
  sessionStorage.aktualnePytanie = 0;
  sessionStorage.bledneOdp = "";
  sessionStorage.pulaPyt = 1;
  window.location = "Pytania.html";
});

przycHTML.addEventListener("click", function () {
  sessionStorage.iloscPkt = 0;
  sessionStorage.aktualnePytanie = 0;
  sessionStorage.bledneOdp = "";
  sessionStorage.pulaPyt = 2;
  window.location = "Pytania.html";
});

przycCSS.addEventListener("click", function () {
  sessionStorage.iloscPkt = 0;
  sessionStorage.aktualnePytanie = 0;
  sessionStorage.bledneOdp = "";
  sessionStorage.pulaPyt = 3;
  window.location = "Pytania.html";
});