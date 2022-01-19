/**Ejercicio8
 * Dado el sueldo de un trabajador, diseña un algoritmo que aplica un incremento
 * de sueldo del 15% si el sueldo es inferior a 1000€, imprimir el nuevo sueldo.
 */

 const prompt = require("prompt-sync")();

 //Añade el sueldo del trabajador

 const sueldo= prompt("Introduce de cuanto es su sueldo: ");
//despues de 3horas....!


const total =Number(sueldo) * 15 / 100

 if (sueldo < 1000)   {
 console.log("su sueldo tiene un incremento del 15% por ser menor de 1000€ y es de: ",Number(total)+Number(sueldo))
} else if (sueldo >=1000){
    console.log("Su sueldo no tiene incremento al ser de 1000€ o más")
}

/**
 * const prompt = require("prompt-sync")();

const salary = Number(prompt("Introduce el sueldo: "));

if (salary < 1000) {
  salary = salary * 1.15; // salary *= 1.15;
}

console.log(El sueldo es ${salary} €);
 */
      