//Ejercicio6
//Dado un numero entero A, hacer un algoritmo que determine si es par, impar o nulo.
//Pista: para determinar el resto de una división, se usa la operación modulo %

//Si el usuario añade un cero debe entrar en un bucle hasta que añada otro numero que no sea 0

const prompt = require("prompt-sync")();

//Pedimos un numero al usuario
let A = Number(prompt("Introduce un número: "));

//Pedimos otra vez el numero mientras el usuario meta un 0
while (A===0) {
    A = Number(prompt("Introduce otro numero: "));
}

//Cuando el número no sea cero, decidiremos si es par o impar(Con el ejercicio6)
if (A % 2===0){
    console.log("el numero es par")
} else if (A % 2!==0){
    console.log("El numero es impar")
} else{
    console.log("El numero es nulo")
}