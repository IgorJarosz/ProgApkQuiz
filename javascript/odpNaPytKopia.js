const przycOdpPierw = document.querySelector("#przycOdpPierw");
const przycOdpDrug = document.querySelector("#przycOdpDrug");
const przycOdpTrzec = document.querySelector("#przycOdpTrzec");

aktualnePytanie = pytania[Math.floor(Math.random() * pytania.length)];

przycOdpPierw.innerHTML = aktualnePytanie.odpPierw;
przycOdpDrug.innerHTML = aktualnePytanie.odpDrug;
przycOdpTrzec.innerHTML = aktualnePytanie.odpTrzec;

document.querySelector("#pytanie").innerHTML = aktualnePytanie.pytanie;

switch (aktualnePytanie.odpPopr) {
  case 1:
    przycOdpPierw.addEventListener("click", function () {
      sessionStorage.iloscPkt = parseInt(sessionStorage.iloscPkt) + 1;
    });
    break;

  case 2:
    przycOdpDrug.addEventListener("click", function () {
      sessionStorage.iloscPkt = parseInt(sessionStorage.iloscPkt) + 1;
    });
    break;

  case 3:
    przycOdpTrzec.addEventListener("click", function () {
      sessionStorage.iloscPkt = parseInt(sessionStorage.iloscPkt) + 1;
    });
    break;
}