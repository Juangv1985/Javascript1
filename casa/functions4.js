/*
Crea una función que muestre las frutas que hay dentro del array pero, si la 
fruta es melón, que no muetsre nada.
*/

const fruits = ["fresa", "manzana", "melon", "sandia"];

function tipFruits (arrayFruits) {
    for (let i = 0; i < arrayFruits.length; i++) {
        if (arrayFruits[i] !=="melon")
        console.log(`las fruta son: ${arrayFruits[i]}`)  
    }
}

tipFruits(fruits)