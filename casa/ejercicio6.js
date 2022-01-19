//Ejercicio6
//Dado un numero entero A, hacer un algoritmo que determine si es par, impar o nulo.
//Pista: para determinar el resto de una división, se usa la operación modulo %

const prompt = require("prompt-sync")();

let A = Number(prompt("Introduce el numero: "))


if (A % 2===0){
    console.log("el numero es par")
} else if (A % 2!==0){ //A % 2===0+1
    console.log("El numero es impar")
} else{
    console.log("El numero es nulo")
} 

