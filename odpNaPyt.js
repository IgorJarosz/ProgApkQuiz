document.querySelector("#pytanie").innerHTML = pytanie1.pytanie;

const przycOdpPierw = document.querySelector("#przycOdpPierw");
const przycOdpDrug = document.querySelector("#przycOdpDrug");
const przycOdpTrzec = document.querySelector("#przycOdpTrzec");

switch (pytanie1.odpPopr) {
  case 1:
    przycOdpPierw.addEventListener("click", function() {
      sessionStorage.iloscPkt = 1;
    });
    break;

  case 2:
    przycOdpDrug.addEventListener("click", function() {
      sessionStorage.iloscPkt = 1;
    });
    break;

  case 3:
    przycOdpTrzec.addEventListener("click", function() {
      sessionStorage.iloscPkt = parseInt(sessionStorage.iloscPkt) + 1;
    });
    break;
}
