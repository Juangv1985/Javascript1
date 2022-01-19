/*
Algoritmo que lea un número entero (lado) y a partir de él cree un cuadrado de asteriscos con ese tamaño. 
Los asteriscos sólo se verán en el borde del cuadrado, no en el interior.
Ejemplo, para lado = 4 escribiría:
* * * *
*     * 
*     *   
* * * *
Recuerda la estructura repetitiva For.

*/
const prompt = require("prompt-sync")();

let n = Number(prompt("Introduca el valor del lado: "));

for (let i = 1; i <=n; i++ ) {   // --> row
    /*para que me salga verticalmente:*/
    let form = "";
    for (let j = 1; j <=n; j++ ) {  // --> column. Llamamos a la variable de forma distinta!!!!
         if(i === 1 || i === n || j === 1 || j === n){
            form = form + "* " ;
         } else {
            form = form + "  ";
         }
    }
    console.log(form);
}



