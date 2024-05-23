console.log('Palindroma')

// chiedo all'utente una parola
const userWord = prompt('Inserisci la parola')
const userWordReversed = invertiParola(userWord)

// creo la mia funzione per inviertire la parola

function invertiParola(userWord) {
    let userWordReversed = ''
  for(let i=userWord.length-1;i>=0;i--){
    userWordReversed += userWord[i]
  }
  return userWordReversed

}

//confronto per vedere se il risulatato della funzione == alla parola
if(userWord == userWordReversed){
  console.log('la parola è palindroma')
}else {
  console.log('la parola non è palindroma')
}

console.log('Pari e dispari')

// L’utente sceglie pari o dispari
let userChoice = prompt('pari o dispari')

console.log('Hai scelto' + ' ' + userChoice)

// L’utente un numero da 1 a 5
const userNum = Number.parseInt(prompt('inserisci un numero da 1 a 5'),10)
console.log('Il numero scelto e\'' + ' ' + userNum)
// genera un numero random (sempre da 1 a 5)

/**
 * 
 * @param {massimo numero selezionabile} max 
 * @param {minimo numero selezionabile} min 
 * @returns numero casuale da 1 a 5
 */
function randomNum(max, min){
    return  Math.floor(Math.random() * (max - min + 1)) + min
}

// assegnamo il numero random generato al pc
const randomCpuNum = Number(randomNum(5,1))
console.log('Il numero del pc e\'' + ' ' + randomNum(5,1))

// sommiamo i numeri dell'utente e del computer
let sommaNum = userNum + randomCpuNum

// // risposta in console se il risultato è pari o dispari
// if(random(5,1) % 2 !== 0){
//   console.log('il numero e\' pari')
// }else{
//   console.log('il numero e\' Dispari')
// }

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function pariODispari(sommaNum, userChoice) {
  // il parametro if risponde alla richiesta anche se ha valore pari e dispari invertiti
  if ((sommaNum % 2 === 0 && userChoice === "dispari") || (sommaNum % 2 !== 0 && userChoice === "pari")) {
    console.log("Hai vinto");
  } else {
    console.log("Hai perso");
  }
  let risultato
  return risultato;
}

// Dichiariamo chi ha vinto.
let risultato = pariODispari(sommaNum, userChoice);