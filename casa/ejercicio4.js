//Ejercicio
//Diseñar un algoritmo que pida por teclado tres numeros; si el primero es negativo,
//debe imprimir el producto de los tres y si no lo es, imprimira la suma.

const prompt = require("prompt-sync")();

const number1 = Number(prompt("Introduce el primer numero: "));
const number2 = Number(prompt("Introduce el segundo numero: "));
const number3 = Number(prompt("Introduce el tercer numero: "));

//if (isNaN(number1) || isNaN(number2) || isNaN(number3)) -->esto confirmara que las letras no son numeros

//si el primero es negativo, debe imprimir el producto de los tres

const multiply = Number(number1) * Number(number2) * Number(number3); //IMPORTANTE, conveniente meter la suma/resta etc en donde se vaya a usar
const sum = Number(number1) + Number(number2) + Number(number3);

if (number1 < 0){
    console.log("la multiplicacion de los tres es: ",multiply)
} else {
 console.log("la suma de todos es: ",sum)}