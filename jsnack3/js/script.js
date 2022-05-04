// 3. Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

// creo l'array di oggetti
let squadre = [
    {
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Real Boolean",
        puntiFatti: 0,
        falliSubiti: 0
    }
]

console.log("array originale", squadre);

// la funzione sostituisce i valori all'interno degli oggetti
squadre = squadre.map(function(squadra) {
    return {
        nome: squadra.nome,
        puntiFatti: randomNumber1to100(), 
        falliSubiti: randomNumber1to100()
    };
});

console.log("array modificato", squadre);




// la funzione genera un numero da 1 a 100 e lo dà come output.
function randomNumber1to100 () {
    return Math.floor(Math.random() *100) +1;
}