Descrizione ESERCIZIO:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
--------------------------------------------------------------------
SVOLGIMENTO - IPOTESI

- creare un array vuoto in JS.
- creare un ciclo per la generazione di 5 numeri casuali, tenendo presente che i suddetti debbano essere tutti numeri differenti.
- il risultato dell'Array deve comparire nel DOM, pertanto agganciare l'array ad un ID html che mostri i numeri generati.
- far partire un Timer di 30 secondi dopo il quale i numeri scompariranno (utilizzare probabilmente un timing function di tipo Timeout - da verificare).
- dopo il Timer dovrà comparire un prompt che richiede che l'utente inserisca uno dopo l'altro i 5 numeri precedentemente comparsi.
- una volta inserito l'ultimo numero, dovrà apparire un messaggio che indichi quanti numeri corretti sono stati inseriti e quali numeri corretti sono stati inseriti (confronto tra i valori contenuti in 2 array?)