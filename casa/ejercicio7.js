//Ejercicio7
/*Construir un algoritmo que dado el coste de un artículo vendido y la cantidad de dinero entregado,
* calcule e imprima el cambio que se debe entregar al cliente
 */

const prompt = require("prompt-sync")();

//coste del producto vendido
const price = prompt("Cuanto cuesta el arítculo?: ");

//cantidad de dinero entregado
const entregado =prompt("El cliente le entrega: ");

//resultado de cambio a entregar
const resta =Number(entregado) - Number(price);
 console.log("Su cambio es: ",resta)

//Necesito saber si pedía esto o se añade de alguna otra manera un precio fijo del artículo y solo añadimos 
//la cantidad que da el cliente y nos da el resultado
