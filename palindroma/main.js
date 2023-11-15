'use strict';

/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

/*
Functions
*/

// function reverseWord(word){
//   let reverseWord = '';

//   for (let i = word.length - 1; i >= 0; i--) {
//     reverseWord += word[i];
//   }

//   return reverseWord;
// }

// //for
// function isPalindroma(word) {
//   if (word === '') return false;
//   if (word.length === 1) return true;

//   //rendere tutto minuscolo
//   const myLittleWord = word.toLowerCase();
//   const revWord = reverseWord(myLittleWord);

//   if (revWord === reverseWord) return true;

//   return false;
// }

//while
function isPalindroma(word) {
  if (word === '') return false;
  if (word.length === 1) return true;

  //rendere tutto minuscolo
  const myLittleWord = word.toLowerCase();

  let start = 0;
  let end = word.length - 1;

  while (start < end) {
    if (myLittleWord[start] !== myLittleWord[end]) return false;
    start++;
    end--;
  }

  return true;
}

/*



/*
Program
*/

const inputUser = prompt('Inserisci una parola');

if (isPalindroma(inputUser)) {
  console.log('palindroma');
} else {
  console.log('non palindroma');
}
