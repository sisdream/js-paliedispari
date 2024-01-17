// chiedo di inserire una parola 
let parole = prompt("Inserisci una parola");
// const wordUser = [prompt("Inserisci una parola")]

// tramite la funzione controllo se la parola è palindroma
let parolaPal = parolePalindrome(parole);
// const checkPal = checkPalindrome(wordUser);

console.log(parolaPal);

//funzioni utili 
// il programma controlla se la parola è polindroma o no

function parolePalindrome (string){
    // trova la lunghezza di una stringa
    const len = string.length;
        // passo attraverso meta della stringa
        for (let i = 0; i < len / 2; i++) {

            // controllo se la prima meta della stringa è uguale alla seconda metà
            if (string[i] !== string[len - 1 - i]) {
                return 'non è palindroma';
            }
        }
        return 'è palindroma';
}

