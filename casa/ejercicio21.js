/*
Algoritmo que lea números enteros hasta teclear 0, y nos muestre 
el máximo, el mínimo y la media de todos ellos. 
Piensa como debemos inicializar las variables.
*/
const prompt = require("prompt-sync")();

let number = Number(prompt("Introduca un número entero: "));

let max = number;
let min = number;
let sum = 0;
let countAmount = 0;

while (number !== 0) {
    if (number > max){
        max = number
    }

    if (number < min){
        min = number
    }
    countAmount = countAmount + 1; // me va  a decir el número total de número introducidos hasta que el bucle se rompa.
    sum = sum + number;
    number = Number(prompt("Introduca un número entero: "));
}

if (countAmount === 0){
    console.log ("Usted no ha introducido ningún número.");

} else {
    let media = sum / countAmount;
    console.log("El número máximo es el:", max, "El número mínimo es el:", min, "La media es:", media);
}


/*
PASOS:

1) Crear una variable para: máximo, mínimo, la suma, countAmount
2) Pedir un número al usuario
3) Bucle que compruebe si es diferente de cero, guarde el número en la variable max si es mayor 
que el que tenía y sino lo guardo en la variable min si es menor que el que tenía
4) Suma uno al contador para luego hacer la media.
*/


/*
const prompt = require("prompt-sync")();

let sum = 0; //creamos una variable suma para guardar las sumas de los numeros que introduce el usuario
let numberAmount = 0; // creamos una variable para guardar la cantidad de numeros introducidos para poder hacer la media

let number = Number(prompt("Introduce un numero: ")); // Pedimos un numero al usuario
// usuario introduce un 20
let max = number; // creamos una variable para guardar el numero maximo que ha introducido el usuario
let min = number; // creamos una variable para guardar el numero minimo que ha introducido el usuario

while (number !== 0) {
  sum = sum + number; //hacemos la suma en cada iteracion (vuelta)
  numberAmount = numberAmount + 1; // aumentamos el contador de numeros en 1

  //comprobar que el numero introducido es mayor que el maximo
  if (number > max) {
    max = number; //20
  }

  //comprobar que el numero introducido es menor que el minimo
  if (number < min) {
    min = number; //15
  }

  number = Number(prompt("Introduce un numero: "));
}

if (numberAmount === 0) {
  console.log("No se ha introducido ningun numero valido");
} else {
  const average = sum / numberAmount;
  console.log(La media es: ${average});

  console.log(`El numero maximo es ${max}`);
  console.log(`El numero minimo es ${min}`);
}
*/
//OPCION CON FOR
/*
for (numberAmount; number !== 0; numberAmount++) {
  sum = sum + number;
  if (number > max) {
    max = number;
  }
  if (number < min) {
    min = number;
  }
  number = Number(prompt("Introduce un numero: "));
}
*/


