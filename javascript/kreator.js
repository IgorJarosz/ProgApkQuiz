const poprPierw = document.querySelector("#przycOdpPierw")
const poprDrug = document.querySelector("#przycOdpDrug")
const poprTrzec = document.querySelector("#przycOdpTrzec")
const przycZap = document.querySelector("#przycZap")

poprPierw.addEventListener("click", function () {
    sessionStorage.tworzPoprOdp = 1;
})

poprDrug.addEventListener("click", function () {
    sessionStorage.tworzPoprOdp = 2;
})

poprTrzec.addEventListener("click", function () {
    sessionStorage.tworzPoprOdp = 3;
})

przycZap.addEventListener("click", function () {
    document.querySelector("#containerNaTekst").innerHTML = "Utworzono nowe pytanie z poprawną odp nr " + sessionStorage.tworzPoprOdp;
})