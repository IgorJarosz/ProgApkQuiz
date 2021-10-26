const przycRozp = document.querySelector("#przycRozp");
przycRozp.addEventListener("click", function() {
  const imieGracza = document.querySelector("#imieGracza").value;
  sessionStorage.setItem("imieGracza", imieGracza);
});
