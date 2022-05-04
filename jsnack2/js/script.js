// 2. Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

const numbers = [];

let userNumber = 0;
let sum = 0;

do {
    // chiedo di inserire un numero
    userNumber = parseInt(prompt("Inserisci un numero"));
    sum += userNumber;
    // lo inserisco nell'array
    numbers.push(userNumber); 
    console.log("numero inserito", userNumber);   
    console.log("somma parziale", sum);
    // fin quando la somma è minore di 50
} while (sum < 50 || isNaN(userNumber)) {   
    console.log("somma finale", sum);
    // tolgo l'ultimo numero che sfora il totale di 50
    numbers.pop();
    console.log("l'array di numeri è", numbers);
}