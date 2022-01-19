//teniendo un array vacio, lo rellenamos del 1 al N

let numeros = [];

function rellena(arrayLength) {
    for (let i = 0; i < arrayLength; i++) {
        numeros[i] = i +1   
    }
}
rellena(6)
console.log(numeros)