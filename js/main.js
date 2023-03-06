'use strict';

/*
**********************************
FUNCTIONS JS
*********************************
*/

function genRandomNum (){
   let element = Math.floor(Math.random() * 1001);
   return element;
}

// Funzione diretta che aggiunge la classe Hidden
function addClass (){
   printNumber.classList.add('hidden_number');
}

/* Funzione diretta che aggiunge la richiesta di un numero all'utente
per 5 volte e aggiunge i numeri in un Array*/
function userPrompt (){
    for (let i = 1; i <= 5; i++) {
        let userNumber = prompt('inserisci il numero');
        console.log(userNumber);
        userArray.push(userNumber);
        console.log(userArray);
    }
 }

// TIMING FUNCTION - Funzione che dopo 30 secondi attiva la classe Hidden
setTimeout (addClass, 30000);


// TIMING FUNCTION - Funzione che dopo 31 secondi mostra il prompt di richiesta numeri all'utente
setTimeout (userPrompt, 32000);


/*
**********************************
ALTRE ISTRUZIONI JS
*********************************
*/

// Creo l'array vuoto dei numeri casuali
const randomNumbers = [];

// Inizializzo la variabile per il singolo numero Random
let randomSingle;

// Creo l'array vuoto dei numeri scritti dall'utente
const userArray = [];

// Creo ciclo FOR per la generazione di 5 numeri casuali
for (let i = 0; i < 5; i++) {
    randomSingle = genRandomNum();
    randomNumbers.push(randomSingle);
    console.log(randomNumbers[i]);
}


// console.log('primo numero: ', randomNumbers[0]);
// console.log('secondo numero: ', randomNumbers[1]);
// console.log('terzo numero: ', randomNumbers[2]);
// console.log('quarto numero: ', randomNumbers[3]);
// console.log('quinto numero: ', randomNumbers[4]);

let printNumber = document.querySelector('.container');
printNumber.innerHTML+=`<div>${randomNumbers[0]} - ${randomNumbers[1]} - ${randomNumbers[2]} - ${randomNumbers[3]} - ${randomNumbers[4]}</div>`
;