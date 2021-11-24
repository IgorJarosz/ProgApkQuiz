const przycOdpPierw = document.querySelector("#przycOdpPierw");
const przycOdpDrug = document.querySelector("#przycOdpDrug");
const przycOdpTrzec = document.querySelector("#przycOdpTrzec");
const polePytania = document.querySelector("#pytanie");

let aktualnePytanie = parseInt(sessionStorage.aktualnePytanie); //zmienna mowiaca na ktorym pytaniu jestesmy aktualnie zaczynajac od 0

function poprOdp() {
  sessionStorage.iloscPkt = parseInt(sessionStorage.iloscPkt) + 1; //dodawanie punktu

  if (aktualnePytanie + 1 != pytania.length) { //jezeli nie wyjdzie poza zakres pytan to leci dalej
    sessionStorage.aktualnePytanie =
      parseInt(sessionStorage.aktualnePytanie) + 1;
    window.location.reload(); //w przyszlosci zamiast reload musze zrobic zmiane koloru przycisku z popr odp oraz przyc
  } // pozwalajacy przejsc na dalsze pytania. trzeba wtedy usunac mozliwosc klikania za pomoca removeEventListeener 
  //jezeli wyjdzie poza to znaczy ze skonczyly sie pytania, lecimy na str z odpowiedziami
  else {
    window.location.replace("odpowiedzi.html");
  }
}

function bledOdp() {
  sessionStorage.bledneOdp += aktualnePytanie; //zapis blednych odp do stringa który musi potem zostac zamieniony na tablice za pomocą split()

  if (aktualnePytanie + 1 != pytania.length) { //jezeli nie wyjdzie poza zakres pytan to leci dalej
    sessionStorage.aktualnePytanie =
      parseInt(sessionStorage.aktualnePytanie) + 1;
    window.location.reload();
  } else { //jezeli wyjdzie poza to znaczy ze skonczyly sie pytania, lecimy na str z odpowiedziami
    window.location.replace("odpowiedzi.html");
  }
}

przycOdpPierw.innerHTML = pytania[aktualnePytanie].odpPierw; //wypelniamy przyciski i pole na pytanie wartosciami
przycOdpDrug.innerHTML = pytania[aktualnePytanie].odpDrug;
przycOdpTrzec.innerHTML = pytania[aktualnePytanie].odpTrzec;
polePytania.innerHTML = pytania[aktualnePytanie].pytanie;

switch (
  pytania[aktualnePytanie].odpPopr //switch sprawdzajacy czy jest kliknieta poprawna czy bledna odp
) {
  case 1:
    przycOdpPierw.addEventListener("click", poprOdp);
    przycOdpDrug.addEventListener("click", bledOdp);
    przycOdpTrzec.addEventListener("click", bledOdp);
    break;

  case 2:
    przycOdpPierw.addEventListener("click", bledOdp);
    przycOdpDrug.addEventListener("click", poprOdp);
    przycOdpTrzec.addEventListener("click", bledOdp);
    break;

  case 3:
    przycOdpPierw.addEventListener("click", bledOdp);
    przycOdpDrug.addEventListener("click", bledOdp);
    przycOdpTrzec.addEventListener("click", poprOdp);
    break;
}