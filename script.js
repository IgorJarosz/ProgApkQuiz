const przycRozp = document.querySelector("#przycRozp");

przycRozp.addEventListener("click", function() {
  const imieGracza = document.querySelector("#imieGracza").value;
  sessionStorage.imieGracza = imieGracza;
  sessionStorage.iloscPkt = 0;
  window.location = "index2.html";
});
