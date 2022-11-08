// JAVASCRIPT //

console.log("YDD");


/*

-Creare un array di oggetti:
    -Ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
        -nome
        -peso
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

*/

let appoggio = 100;
let variabileTemporanea;

let biciLeggera = 
{
    modello: "",
    peso: 0
}

//Vettore di oggetti
let bici = 
[
    {
        modello: 'BMX',
        peso: 10
    },
    {
        modello: 'BMXL',
        peso: 15
    },
    {
        modello: 'XBML',
        peso: 5
    },
    {
        modello: 'LBXM',
        peso: 20
    }
]

let {modello, peso} = bici;

bici.forEach(({peso}, i) => 
{
    if(appoggio > peso)
    {
        appoggio = peso;
        biciLeggera = bici[i];
    }
});

// let {modello, peso} = bici;

console.log(`Modello: ${biciLeggera.modello}`)
console.log(`Peso: ${biciLeggera.peso}kg`)









































// console.log(biciLeggera)

   



// ----- FINE :) -----