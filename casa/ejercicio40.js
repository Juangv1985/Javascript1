/**
 * Generar un array de N elementos con números aleatorios no repetidos entre sí.
 */

 function randomNumbers(numberAmount) {
    let numbers = []
    for (let i = 0; i < numberAmount; i++) {
        let numberRepeat;
        let randomNumber;
        do {
            numberRepeat = false
            randomNumber = Math.floor(Math.random() * 100);
            for (let j = 0; j < numbers.length; j++) {
                if (numbers[j] === randomNumber) {
                    numberRepeat = true
                }
            }
        } while (numberRepeat);
            numbers[i] = randomNumber
    } 
    return numbers;

}
    console.log(randomNumbers(100));

 /**
  * La primera vez que se genera el bucle, i = 0. 
  * La primera vez que se ejecuta el código, se va a crear el numberRepeat y el randomNumber.
  * Vamos a decir que el numberRepeat es falso al ppio porque aun no lo hemos comparado.
  * Entramos ahora en el bucle for del do while. La variable es j porque tiene que ser diferente al bucle for inicial.
  * Este bucle tiene que parar cuando el array de número que tenemos llegue a su máximo número de elemetos (number.length).
  * Cuando ya no haya más elementos, numbers.length será false y se saldrá del bucle.
  * Ahora comprobamos si la posición en la que estoy y el número random son iguales. 
  * Si son iguales (ejemplo: si numbers[54] === 54 ----> 54 = 54) --> el número está repetido y por tanto la condición del while se confirma y vuelve a hacer el bucle para irse otra vez al do y crear otro número nuevo.
  * Si no son iguales (numberRepeat = false), no se cumple la condición del while y saldrá del bucle. 
  * Finalmente, va a guardar el número random que se ha generado en el array en la posición en la que esté (numbers[i] = randomNumber).
  */