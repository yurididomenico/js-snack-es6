// JAVASCRIPT //

console.log("YDD");


/*

Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà:
-nome
-punti fatti
-falli subiti
    Nome sarà l’unica proprietà da compilare
    le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
-Punti fatti
-falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti
stampiamo tutto in console.
*/

let squadre =
[
    {
        nome: 'Kebabbari',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Pizzaioli',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Ristoratori',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Baristi',
        punti: 0,
        falli: 0
    },
    
]

squadre.forEach((elemento)=>
{
    elemento.punti = Math.floor(Math.random()*20)+1;
    elemento.falli = Math.floor(Math.random()*7)+1;
})

console.log(squadre)

let nuovoArray = squadre.map(({nome, falli}) =>
{
    return {nome, falli};
})


console.log(nuovoArray)































// console.log(biciLeggera)

   



// ----- FINE :) -----