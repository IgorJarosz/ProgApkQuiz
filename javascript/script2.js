const przycLatwy = document.querySelector("#przycLatwy");
const przycSredni = document.querySelector("#przycSredni");
const przycTrudny = document.querySelector("#przycTrudny");
const miejsceNaIimie = document.querySelector("#tuImie");

miejsceNaIimie.innerHTML += sessionStorage.imieGracza; //wstawiam sobie imie w miejsce

przycLatwy.addEventListener("click", function () { //dodatkowo resetuje wartosci aby mozna bylo zmienic poz trud, w przyszlosci pewnie zamiast poziomu trud beda rodzaje quizow rozne
  sessionStorage.iloscPkt = 0;
  sessionStorage.aktualnePytanie = 0;
  sessionStorage.bledneOdp = "";
  window.location = "Pytania.html";
});

przycSredni.addEventListener("click", function () {
  sessionStorage.iloscPkt = 0;
  sessionStorage.aktualnePytanie = 0;
  sessionStorage.bledneOdp = "";
  window.location = "Pytania.html";
});

przycTrudny.addEventListener("click", function () {
  sessionStorage.iloscPkt = 0;
  sessionStorage.aktualnePytanie = 0;
  sessionStorage.bledneOdp = "";
  window.location = "Pytania.html";
});