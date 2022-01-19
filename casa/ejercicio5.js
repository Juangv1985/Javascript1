/** Ejercicio5
 * Construir algoritmo tal que con un numero entero como entrada,
 * determine e imprima si es positivo, negativo o nulo
 */

const prompt = require("prompt-sync")();

const number = (prompt("Introduce un número: "));

if (number > 0){
    console.log ("El numero es positivo");
} else if (number < 0) {
    console.log("El numero es negativo");
} else {
    console.log("El numero es nulo");
}