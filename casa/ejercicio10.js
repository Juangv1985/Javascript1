/**Ejericicio10
 * Construir un algoritmo que dado la categoría y sueldo de un trabajador calcule
 * el aumento de sueldo correspondiente teniendo en cuenta la siguiente tabla.
 * Imprimir la categoria del trabajador y su nuevo sueldo
 * 
 * CATEGORIA  ----- INCREMENTO
 *    1               15%
 *    2               10%
 *    3                6%
 *    4                3%
 */


 const prompt = require("prompt-sync")();

 //Categoria y sueldo del trabajador

 const categoria = Number(prompt("Introduce un número del 1 al 4 para la categoría del trabajador: "));
 const sueldo = Number(prompt("Introduce el sueldo del trabajador: "));

/*
if (categoria===1){
    const total =sueldo *0.15+sueldo
    console.log("El resultado de la categoria 1 es",total);
} 
else if (categoria===2){
    const total =sueldo *10/100 +sueldo
    console.log("El resultado de la categoria 2 es: ",total);
}else if (categoria===3){
     const total =sueldo *6/100+sueldo
     console.log("El resultado de la categoria 3 es: ",total);
 }
 else {
     const total =sueldo *3/100+sueldo
     console.log("El resultado de la categoria 4 es: ",total)
 }*/

 switch (categoria) {
     case 1:
         total= sueldo*15/100+sueldo
         console.log("El resultado de la categoria 1 es: ",total)
         break;
    case 2:
         total =sueldo *10/100 +sueldo
         console.log("El resultado de la categoria 2 es: ",total);
        break;
    case 3:
         total =sueldo *6/100+sueldo
         console.log("El resultado de la categoria 3 es: ",total);
        break;
    case 4:
         total =sueldo *3/100+sueldo
         console.log("El resultado de la categoria 4 es: ",total)
        break;
     default:
         console.log("¡¡¡ERROR!!! Introduce una categoría del trabajador valida: Números del 1 al 4")
         break;
 }

 /**
  * switch (category) {
  case 1:
    salary = salary * 1.15;
    break;
  case 2:
    salary = salary * 1.1;
    break;
  case 3:
    salary = salary * 1.06;
    break;
  case 4:
    salary = salary * 1.03;
    break;
  default:
    console.log("Categoría no válida");
    break;
}

if (category >= 1 && category <= 4) {
  console.log(`Con categoría ${category} tu nuevo sueldo es ${salary}`);
}
  */