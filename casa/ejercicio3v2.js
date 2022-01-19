//Ejercicio3
//Algoritmo que lea dos numeros y nos diga cual de ellos es mayor
//o si son iguales(recuerda usar la estructura condicional if)

const prompt = require("prompt-sync")();

const number1 = Number(prompt("Introduce el primer numero: "));
const number2 = Number(prompt("Introduce el segundo numero: "));
const number3 = Number(prompt("Introduce el tercer numero: "));


/*if (number1 || number2 === number3) {
    console.log("Los numeros son iguales ");
} else if (number1 || number2 < number3){
    console.log("el tercer numero es el mayor");
} else if (number1 || number3 < number2){
    console.log("El segundo numero es el mayor")
} else if (number3 || number2 < number1){
    console.log("El primer numero es el mayor")
}

//Ahora con tres numeros diferentes.*/

if (number1===number2 && number1===number3 ) {
    console.log("los numeros son iguales");
} else if (number1 < number2 && number1 < number3){
    console.log ("Number 1 es el menor");
} else if (number1 > number2 && number1 > number3){
    console.log("number 1 es el mayor");
} else if (number1 > number2 && number1 < number3){
    console.log("Number3 es el mayor");
}else if (number1< number2 && number1>number3){
    console.log("Number3 es el menor");
}else if (number1<number2 && number3 <number2){
    console.log("number 2 es el mayor");
} else{
    console.log("number2 es el menor");
}