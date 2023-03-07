'use strict';

/*
*********************************************
FUNCTIONS JS
*********************************************
*/

// Funzione generica per la generazione di un numero casuale tra 0 e 1000
function genRandomNum (){
   let element = Number(Math.floor(Math.random() * 1001));
   return element;
}

// Funzione diretta che aggiunge la classe CSS hidden_number
function addClass (){
    printNumberArea.classList.add('hidden_number');
}

/* Funzione diretta che aggiunge la richiesta di un numero all'utente
per 5 volte e aggiunge i numeri in un Array*/
function userPrompt (){
    for (let i = 1; i <= 5; i++) {
        let userNumber = Number(prompt('inserisci il numero'));
        userArray.push(userNumber);
        console.log('Array numeri utente: ', userArray);
    }
 }

/* Funzione diretta che stampa i numeri inseriti dall'utente*/
 function printUserNum (){
    let printUserNumber = document.querySelector('.container');
        printUserNumber.innerHTML += `<h2>NUMERI UTENTE: </h2><div>${userArray[0]} - ${userArray[1]} - ${userArray[2]} - ${userArray[3]} - ${userArray[4]}</div>`;
 }

// Funzione diretta che rimuove la classe CSS hidden_number
function removeClass (){
        printNumberArea.classList.remove('hidden_number');
 }


//  PROVA NON FUNZIONA - FUNZIONE PER RISULTATO FINALE (VALORE DELL'ARRAY USER COMPRESO NEL VALORE DELL'ARRAY RANDOM)
 function finalResult(){
    for (let i = 0; i < userArray.length; i++) {
        if (randomNumbers.includes(i)) {
        finalArray.push(i);
        console.log('final array: ', finalArray);
        console.log('ciao');
        } else{
            console.log('ciao');
        }

    }
    }
 


 /*
***********************************************
TIMING FUNCTIONS JS
************************************************
*/

// TIMING FUNCTION - Funzione che dopo 30 secondi attiva la classe Hidden (scompare l'area Number dal DOM)
setTimeout (addClass, 30000);

// TIMING FUNCTION - Funzione che dopo 32 secondi mostra il prompt di richiesta numeri all'utente
setTimeout (userPrompt, 32000);

// TIMING FUNCTION - Funzione che dopo 33 secondi mostra i numeri utente
setTimeout (printUserNum, 33000);

// TIMING FUNCTION - Funzione che dopo 34 secondi disattiva la classe Hidden (ricompare l'area Number nel DOM)
setTimeout (removeClass, 34000);

// TIMING FUNCTION - Funzione che dopo 35 secondi mostra la final Array in console
setTimeout (finalResult, 35000);


/*
************************************************
ALTRE ISTRUZIONI JS
************************************************
*/

// Creo l'array vuoto dei numeri casuali
const randomNumbers = [];

// Inizializzo la variabile per il singolo numero Random
let randomSingle;

// Creo l'array vuoto dei numeri scritti dall'utente
const userArray = [];

// Creao l'array finale (prova)
const finalArray = [];

// Creo ciclo FOR per la generazione di 5 numeri casuali
for (let i = 0; i < 5; i++) {
    randomSingle = Number(genRandomNum());
    randomNumbers.push(randomSingle);
    console.log('Array numeri random: ' ,randomNumbers);
}

/*Aggancio la classe container alla variabile per stampare i numeri da memorizzare, e inserisco
l'elemento div che contiene i miei numeri casuali, per stampare tutto nel DOM*/
let printNumberArea = document.querySelector('.container');
printNumberArea.innerHTML += `<h2>MEMORIZZA 5 NUMERI:</h2><div>${randomNumbers[0]} - ${randomNumbers[1]} - ${randomNumbers[2]} - ${randomNumbers[3]} - ${randomNumbers[4]}</div>`;






