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

console.log('Pari e dispari')