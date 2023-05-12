// esercizio di oggi: calcolo del prezzo del biglietto del treno
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.

const km = parseInt ( prompt ( "Quanti chilometri devi percorrere?" ) )
const eta = parseInt ( prompt ( "Quanti anni hai?" ) )

const prezzoIntero = km * 0.21
const prezzoMinorenni = ( 1 - 0.2) * prezzoIntero
const prezzoOver = ( 1 - 0.4 ) * prezzoIntero


if ( isNaN (km) || isNaN (eta) || km < 0 || eta < 0) {
    console.log ( "C'è un errore di scrittura dei dati" )
} else {
    if ( eta > 17 && eta < 64 ) {
        console.log ( "Il tuo biglietto viene " + prezzoIntero + "€" )
    } else if ( eta <= 17 ) {
        console.log ( "Sei minorenne! Il tuo biglietto è scontato del 20%! Il prezzo finale è di " + prezzoMinorenni + "€" )
    } else {
        console.log ( "Sei over 65! Il tuo biglietto è scontato del 40%! Il prezzo finale è di " + prezzoOver + "€" )
    }
}