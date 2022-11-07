// JAVASCRIPT //

console.log("YDD");

/*
Snack 1
Dato l'array di nomi e dati due numeri min e max (min più piccolo di max).

-Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
-Eseguiamo questo esercizio con "forEach".
-Eseguiamo questo esercizio con "filter".

esempio:
dati i valori
min: 2
max: 4
i nomi nell'array nuovo saranno i nomi compresi tra queste posizioni 2 e 4
*/

let vettoreNomi = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
let nuovoVettoreNomi = [];
let min = Math.floor(Math.random()*7);
let max = 4;
let app;

if(min>max)
{
    app = min;
    min = max;
    max = app;
}

console.log(min)
console.log(max)

console.log(vettoreNomi);
// console.log(`-Minimo: ${min}`);
// console.log(`-Massimo: ${max}`);


//Versione forEach //////////////////////////////////////////////////////////////////////////////////
// vettoreNomi.forEach((elemento, index) =>
// {
//     if(index >= min && index <= max)
//     {
//         console.log("if");
//         nuovoVettoreNomi.push(elemento);
//     }
// })

// console.log(nuovoVettoreNomi);


//Versione filter //////////////////////////////////////////////////////////////////////////////////
nuovoVettoreNomi = vettoreNomi.filter((elemento, index) =>
{
    if(index >= min && index <= max)
    {
        return true;
    }
    else
    {
        return false;
    }
})


console.log(nuovoVettoreNomi)























// ----- FINE :) -----