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

let biciLeggera = 
{
    modello: "",
    peso: 0
}

//Vettore di oggetti
let bici = 
[
    {
        modello: 'testo1',
        peso: 15
    },
    {
        modello: 'testo2',
        peso: 10
    },
    {
        modello: 'testo3',
        peso: 80
    },
    {
        modello: 'testo4',
        peso: 10
    }
]

// let {modello, peso} = bici;

bici.forEach(({peso}, index) => 
{
    if(appoggio > peso)
    {
        appoggio = peso;
        biciLeggera = bici[index];
    }
    // i++;
});



// let {modello, peso} = bici;

console.log(`Modello: ${biciLeggera.modello}`)
console.log(`Peso: ${biciLeggera.peso}`)

































// console.log(biciLeggera)

   



// ----- FINE :) -----