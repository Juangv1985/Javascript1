//Algoritmo que imprima la cuenta y los numeros que son multiplos de 2 o de 3 que hay entre 1 y 100.


let count = 1;
let limit = 100;

let multiplos2 = 0;
let multiplos3 = 0;

let number1 = 5;
let number2 = 10;

while (count <= limit) {
    if (count % number1 === 0) {
      console.log(`${count} es multiplo de ${number1}`);
      multiplos2++;
    }
    if (count % number2 === 0) {
      console.log(`${count} es multiplo de ${number2}`);
      multiplos3++;
    }
  
    count++;
  }
  
  console.log(
    `Entre el 1 y el ${limit} el numero ${number1} tiene ${multiplos2} multiplos`
  );
  console.log(
    `Entre el 1 y el ${limit} el numero ${number2} tiene ${multiplos3} multiplos`
  );