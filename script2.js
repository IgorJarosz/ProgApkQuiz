const przycLatwy = document.querySelector("#przycLatwy");
const przycSredni = document.querySelector("#przycSredni");
const przycTrudny = document.querySelector("#przycTrudny");
const miejsceNaIimie = document.querySelector("#tuImie");

miejsceNaIimie.innerHTML += sessionStorage.imieGracza;

przycLatwy.addEventListener("click", function() {
  window.location = "Pytania.html";
});

przycSredni.addEventListener("click", function() {
  window.location = "Pytania.html";
});

przycTrudny.addEventListener("click", function() {
  window.location = "Pytania.html";
});
