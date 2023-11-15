'use strict';

/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri



Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

//functions

//user choice
function handleUserChoice(text) {
  let availableWords = ['pari', 'dispari'];
  let choice = '';

  do {
    choice = prompt(text).toLowerCase();
  } while (!availableWords.includes(choice));

  return choice;
}
//user choice
function handleUserNumber(text, min, max) {
  let choice = '';
  do {
    choice = parseInt(prompt(text));
    console.log(choice);
  } while (choice < min || choice > max);

  return choice;
}

//randomNumber
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//even or odd
function isEven(num) {
  return num % 2 === 0; //true or false
}

//winner

function userWon(userChoice, isEven) {
  //verifica se pari e vero
  if (userChoice === 'pari' && isEven) return true;
  //verifica se dispari e false
  if (userChoice === 'dispari' && !isEven) return true;

  return false;
}

//operazioni
const userChoice = handleUserChoice('Inserisci pari o dispari!!!!');
const userNumber = handleUserNumber('Inserisci un numero', 1, 5);
const computerNumber = randomNumber(1, 5);

const numbersSum = userNumber + computerNumber;
const sumIsEven = isEven(numbersSum);
const winner = userWon(userChoice, sumIsEven);

if (winner) {
  console.log('Vince user');
} else {
  console.log('Vince computer');
}
