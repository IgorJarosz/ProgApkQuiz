const klik = document.querySelector(".przyciskDefault")

klik.addEventListener("click", function () {
    sessionStorage.tworzPytanie = document.querySelector("#tworzonePyt").value;
    sessionStorage.tworzOdpPierw = document.querySelector("#tekstOdpPierw").value;
    sessionStorage.tworzOdpDrug = document.querySelector("#tekstOdpDrug").value;
    sessionStorage.tworzOdpTrzec = document.querySelector("#tekstOdpTrzec").value;
})