const przycRozp = document.querySelector("#przycRozp");

przycRozp.addEventListener("click", function () { //przypisuje wartosci = 0 aby wyzerowac wyniki, ustawiam imie gracza w session storage
  const imieGracza = document.querySelector("#imieGracza").value;
  sessionStorage.imieGracza = imieGracza;
  sessionStorage.iloscPkt = 0;
  sessionStorage.aktualnePytanie = 0;
  sessionStorage.bledneOdp = "";
  sessionStorage.pulaPyt = 0;
  if (imieGracza != "")
    window.location.replace("index2.html")
  else
    alert("wpisz poprawne imie")
});