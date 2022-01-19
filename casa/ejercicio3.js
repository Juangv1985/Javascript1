//Ejercicio3
//Algoritmo que lea dos numeros y nos diga cual de ellos es mayor
//o si son iguales(recuerda usar la estructura condicional if)



const prompt = require("prompt-sync")();

const number1 = Number(prompt("Introduce el primer numero: "));
const number2 = Number(prompt("Introduce el segundo numero: "));


if (number1 === number2) {
    console.log("Los numeros son iguales ");
} else if (number1 < number2){
    console.log("el primer numero es menor");
} else {
    console.log("El segundo numero es menor");
}

//Ahora con tres numeros diferentes.