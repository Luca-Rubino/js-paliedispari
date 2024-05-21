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
const userChoice = prompt('pari o dispari')
// L’utente un numero da 1 a 5
const userNum = Number.parseInt(prompt('inserisci un numero da 1 a 5'),10)

// genera un numero random (sempre da 1 a 5)

/**
 * 
 * @param {massimo numero selezionabile(5)} max 
 * @param {minimo numero selezionabile(1)} min 
 * @returns numero casuale da 1 a 5
 */
function random (max, min){
    return  Math.floor(Math.random() * (max - min +1)) + min
}