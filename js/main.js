'use strict';

/*
*********************************************
FUNCTIONS JS
*********************************************
*/

/* ******************** FUNZIONI GENERICHE *************************** */

// Funzione generica per la generazione di un numero casuale tra 0 e 1000
function genRandomNum (){
   let element = Number(Math.floor(Math.random() * 1001));
   return element;
}

// Funzione generica per svuotare(rimuobere) un elemento dal DOM (selezionato da ID)
function removeHtmlElement(idElement){
    let element = document.getElementById(idElement).innerHTML ='';
    return element
 }

/* ******************** FUNZIONE SPECIFICA - GIOCO DEI NUMERI ************ */

function gameNumber(){

    const randomNumbers = [];  // Creo l'array vuoto dei numeri cpu casuali

    let randomSingle; // Inizializzo la variabile per il singolo numero Random

    const userArray = [];  // Creo l'array vuoto dei numeri scritti dall'utente

    const finalArray = [];  // Creo l'array vuoto finale dove inserire i numeri utente che corrispondono a quelli Random

    // Creo ciclo FOR per la generazione di 5 numeri casuali
    for (let i = 0; i < 5; i++) {
    randomSingle = Number(genRandomNum());
    randomNumbers.push(randomSingle);
    console.log('Array numeri random: ', randomNumbers);
    }

    /*Aggancio la classe container alla variabile per stampare i numeri da memorizzare, e inserisco
    l'elemento div che contiene i miei numeri casuali, per stampare tutto nel DOM*/
    let printNumberArea = document.getElementById('container');
    printNumberArea.innerHTML += `<h2>MEMORIZZA 5 NUMERI:</h2><div>${randomNumbers[0]} - ${randomNumbers[1]} - ${randomNumbers[2]} - ${randomNumbers[3]} - ${randomNumbers[4]}</div>`;

    setTimeout(function(){
        printNumberArea = removeHtmlElement('container');
    }, 20000);

    /* Ciclo FOR che aggiunge la richiesta di un numero all'utente
    per 5 volte e aggiunge i numeri in un Array*/
    setTimeout(function(){
        for (let i = 1; i <= 5; i++) {
            let userNumber = Number(prompt(`inserisci un numero ${i}`));
            if (randomNumbers.includes(userNumber)) {
                finalArray.push(userNumber);
            }
            userArray.push(userNumber);
            console.log('Array Finale: ', finalArray);
        }

        /* Variabile per stampare nel DOM i numeri inseriti dall'utente*/
        let printUserNumber = document.getElementById('container');
        printUserNumber.innerHTML += `<h2>NUMERI UTENTE: </h2><div>${userArray[0]} - ${userArray[1]} - ${userArray[2]} - ${userArray[3]} - ${userArray[4]}</div>`;
        //Crare uno Switch con i casi: tutti indovinati, indovinati > 0 e > 5 e indovinati 0
        switch (true) {
            case finalArray.length > 0 && finalArray.length < 5:
                printUserNumber.innerHTML +=`<div>Quantità numeri indovinati: ${finalArray.length}</div><div>Numeri indovinati: ${finalArray}</div>`;
                break;

            case finalArray.length === 5:
                printUserNumber.innerHTML +=`<div>Quantità numeri indovinati: ${finalArray.length}</div><div>Complimenti! li hai indovinati tutti !</div>`;
                break;
        
            default:
                printUserNumber.innerHTML +=`<div>Quantità numeri indovinati: ${finalArray.length}</div><div>Non ne hai azzeccato uno, sei una schiappa!</div>`;
                break;
        }
    }, 22000);

}
 
 /*
***********************************************
ALTRE FUNCTIONS
************************************************
*/


// ricordarsi di attivare la funzione game
gameNumber();