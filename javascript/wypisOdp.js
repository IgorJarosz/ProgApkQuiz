const miejsceNaImie = document.querySelector("#tuImie");
const miejsceNaPunkty = document.querySelector("#ilePkt");
const miejsceNaIleBledne = document.querySelector("#bledneOdp");
const miejsceNaBledne = document.querySelector("#ktoreBledne");
let tablica = Array.from(sessionStorage.bledneOdp);


miejsceNaImie.innerHTML += sessionStorage.imieGracza + " ,twoja ilość punktów to: ";

miejsceNaPunkty.innerHTML = sessionStorage.iloscPkt;

if (tablica.length == 0) {
    miejsceNaIleBledne.innerHTML = "Nie popełniłeś żadnego błędu, Brawo!"
} else if (tablica.length == 1) {
    miejsceNaIleBledne.innerHTML = "Błędnie odpowiedziałeś na pytanie nr:"
    miejsceNaBledne.innerHTML += parseInt(tablica[0]) + 1;
} else {
    miejsceNaIleBledne.innerHTML = "Błędnie odpowiedziałeś na pytania nr:"
    for (i = 0; i < tablica.length; i++) {
        miejsceNaBledne.innerHTML += (parseInt(tablica[i]) + 1);
        if (i != tablica.length - 1)
            miejsceNaBledne.innerHTML += " , ";
    }

}