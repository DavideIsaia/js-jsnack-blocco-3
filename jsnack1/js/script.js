// 1. Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

const numbArray1 = [1, 5, 8, 54, 97, 23, 56, 61];
const numbArray2 = [4, 76, 23, 44, 89];

console.log("Array 1 di partenza",numbArray1);
console.log("Array 2 di partenza", numbArray2);

// se il primo array è più corto
if (numbArray1.length < numbArray2.length) {
    do {
        numbArray1.push(randomNumber1to100());     
    } while (numbArray1.length < numbArray2.length); 
    // se il primo array è più lungo 
} else if (numbArray1.length > numbArray2.length) {
    do {
        numbArray2.push(randomNumber1to100());     
    } while (numbArray2.length < numbArray1.length);    
} else {
    console.log("Gli array sono uguali");
}

console.log("Array 1 dopo il riempimento", numbArray1);
console.log("Array 2 dopo il riempimento", numbArray2);


// la funzione genera un numero da 1 a 100 e lo dà come output.
function randomNumber1to100 () {
    return Math.floor(Math.random() *100) +1;
}