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
    
//se la scelta dell'utente è uguale alla funzione numEven ha vinto
  if(scelta === numEven(somma)){
    console.log("hai vinto");
    //altrimenti ha perso
} else {
    console.log("hai perso");
}
    
// funzione generatrice di numeri random
function genNumbRandom(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}
   
// funzione per stabilire se un numero è pari
function numEven(numF){
   if(numF % 2 === 0){
       return even = true;
   } else {
        return even = false;
   }
}  
   
//console log per un riscontro in pagina
console.log("l'utente ha scelto: (se è true ha scelto pari se è false ha scelto dispari)", scelta);
console.log("numero utente", numUser);
console.log("numero cpu", numPc );
console.log("la somma è:", somma);