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