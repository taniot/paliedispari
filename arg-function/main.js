'use strict';

/*
Functions
*/

function sommaNumeri(num1, num2) {
  const somma = num1 + num2;
  return somma;
}

function myConsoleLog(text) {
  console.log('prima di input');
  console.log(text);
  console.log('dopo di input');
}

// console.log(sommaNumeri(1, 1));

// const elemento1 = sommaNumeri(2, 2);
// const elemento2 = sommaNumeri(3, 3);
// console.log(elemento1);
// console.log(elemento2);

const elemento3 = sommaNumeri(sommaNumeri(2, 2), sommaNumeri(3, 3));
console.log(elemento3);

myConsoleLog(elemento3);

myConsoleLog(sommaNumeri(sommaNumeri(2, 2), sommaNumeri(3, 3)));
//myConsoleLog(sommaNumeri(4, 6));
//myConsoleLog(10);

/*
'prima di input'
10
'dopo di input';
*/

// function Saverio(){

//   if(qualcosa){
//     return;
//   }

//   Saverio();
// }

// verio
