/**Ejercicio12
 * Construir un algoritmo que te permita calcular la temperatura teniendo en cuenta el 
 * numero de sonidos emitidos por un grillo (en epoca de apareamiento) en un minuto, es una funcion
 * que dependa de la temperatura. Como resultado de esto, es posible determinar el nivel
 * de temperatura haciendo uso de un grillo como termómemtro.
 * 
 * La formula es:
 *  T = N / 4 + 40, donde T es la temperatura en grados centígrados y N es el numero de sonidos
 * emitidos por minuto.
 * 
 * Como el aparato para medir los sonidos puede fallar, hay que tener en cuenta que si el número
 * de sonidos es 0, es un error y debe de imprimir "Error".
 */

 const prompt = require("prompt-sync")();

 //Añadir el numero de sonidos que hacee el grillo

 const sonidosGrillo =Number(prompt("Introduce el número de sonidos: "));

 
 if (sonidosGrillo<=0){
     console.log("Error")
 } else{
     const T = sonidosGrillo / 4+40
     console.log("resultado",T)
 }


