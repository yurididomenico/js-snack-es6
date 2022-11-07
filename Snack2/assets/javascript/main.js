// JAVASCRIPT //

console.log("YDD");


/*

Dato un elenco degli studenti di una facoltà, con il totale dei loro voti:
1- Creare delle targhe con il loro nome in maiuscolo.
    -Nuovo array di stringhe.
    -Ogni elemento del nuovo array sarà il nome dello studente ma con tutte le lettere maiuscole.
2- Creare un nuovo array con gli studenti che hanno un totale di voti superiore a 70
3- Creare un nuovo array di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

*/


let studenti = 
[
    { nome: 'Marco', id: 213, voto: 78 },
    { nome: 'Paola', id: 110, voto: 96 },
    { nome: 'Andrea', id: 250, voto: 48 },
    { nome: 'Gaia', id: 145, voto: 74 },
    { nome: 'Luigi', id: 196, voto: 68 },
    { nome: 'Piero', id: 102, voto: 50 },
    { nome: 'Francesca', id: 120, voto: 84 }
];

//Estrapola nomi e li rende maiuscoli
let targheStudenti = studenti.map((elemento) =>
{
    return elemento.nome.toUpperCase();
})
//Stampa vettore nomi maiuscolo
console.log(targheStudenti);



//Estrapola studenti con voto superiore a 70
let studentiBravi = studenti.filter((elemento) =>
{
    if(elemento.voto >= 70)return elemento;
})
//Stampa vettore studenti con voto superiore a 70
console.log(studentiBravi);



//Estrapola studenti con voto superiore a 70 e id superiore a 120
let studentiBraviId120 = studenti.filter((elemento) =>
{
    if(elemento.voto >= 70 && elemento.id >= 120)return elemento;
})
//Stampa vettore studenti con voto superiore a 70
console.log(studentiBraviId120);

// ----- FINE :) -----