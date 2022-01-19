/*function saludar (name, lastName, day){
    console.log(`Hola ${name} ${lastName}`)
    if(day === "viernes"){
        console.log("Ya es viernes, buen finde!");
    } else{
        console.log("A seguir con la semana");
    }
}

saludar("nacho", "viano", "martes");
*/

//EJEMPLOS DE SUMAS RESTAS MULTIPLICACION


/*
function sum(num1, num2) {
    const result = num1 + num2;
    console.log(result);
  }
  
  function rest(num1, num2) {
    const result = num1 - num2;
    console.log(result);
  }
  
  function multiply(num1, num2) {
    const result = num1 * num2;
    console.log(result);
  }*/

//Crear un array de numeros y con una functions que le pasemos a ese array
// vamos a mostrar cada numero

let numbers = [1,2,3,4,5]

function getNumbers(arrayNumbers) {
   for (let index = 0; index <  arrayNumbers.length; index++) {
       const numerosDelArray = arrayNumbers[index];
       console.log(numerosDelArray)
   }
}

getNumbers(numbers)

