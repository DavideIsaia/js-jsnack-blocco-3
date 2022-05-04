// Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

let $ = document.querySelector.bind(document);

// creo un array vuoto
const numbArray = [];

// riempio l'array con numeri casuali
do {
    numbArray.push(randomNumber1to100());     
} while (numbArray.length < 10);

console.log(numbArray);
$('#array').innerHTML = numbArray;

// la funzione genera un numero da 1 a 100 e lo dà come output.
function randomNumber1to100 () {
    return Math.floor(Math.random() *100) +1;
}