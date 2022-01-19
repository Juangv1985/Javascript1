/**
 * Dado dos arrays del mismo tamaño, determinar, elemento a elemento
 * , si ambos son iguales. Con que un elemento sea diferente,
 *  se considerarán los arrays como diferentes. Escribir al final
 *  del algoritmo el resultado.
 */

// Dado dos arrays del mismo tamaño
let array1 = ["casa", "arbol", "coche", "moto", "perro"];
let array2 = ["casa", "arbol", "coche", "moto", "gato"];

//determinar, elemento a elemento
// , si ambos son iguales. Con que un elemento sea diferente,
// se considerarán los arrays como diferentes. Escribir al final
//  del algoritmo el resultado.

function diferencias(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i])
      console.log(`el/la ${array1[i]}  y el/la ${array2[i]} son iguales`);
    else {
      console.log(`el ${array1[i]} y el ${array2[i]} son distintos`);
    }
  }
}
diferencias(array1, array2);
/*function comparationArrays(array1, array2) {
  if (array1[0] !== array2[0]) {
    console.log(`El ${array1[0]} y el ${array2[0]} son distintos`);
  } else if (array1[1] !== array2[1]) {
    console.log(`El ${array1[1]} y el ${array2[1]} son distintos`);
  } else if (array1[2] !== array2[2]) {
    console.log(`El ${array1[2]} y el ${array2[2]} son distintos`);
  } else if (array1[3] !== array2[3]) {
    console.log(`El ${array1[3]} y el ${array2[3]} son distintos`);
  } else if (array1[4] !== array2[4]) {
    console.log(`El ${array1[4]} y el ${array2[4]} son distintos`);
  } else {
    console.log("Los arrays son iguales");
  }
}

comparationArrays(array1, array2);*/

/*
//SOLUCION FINAL DEL EJERC39
function sonIguales(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }
    for (let i = 0; i < array2.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
  let arrayUno = [1, 2, 3];
  let arrayDos = [1, 2, 3];
  console.log(sonIguales(arrayUno, arrayDos));
  */
