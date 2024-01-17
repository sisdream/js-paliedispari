// l'utente sceglie pari o dispari
const pariDispari = prompt("Scegli pari o dispari?");

//creo una variabile per capire se l'utente ha scelto pari o dispari
let scelta = "";

//do un valore a "pari" o "dispari"
if(pariDispari === "pari"){
        scelta = true;
}else if(pariDispari === "dispari"){
        scelta = false;
}
    
// l'utente inserisce un numero da 1 a 5
const numUser = parseInt(prompt("scegli un numero da 1 a 5"));

// genero un numero random da 1 a 5
let numPc = genNumbRandom(1, 5);

// sommo i numeri
let somma = numUser + numPc;  
    
