//Realizar una funcion que recibe un array de animales que segun el ruido que hace cada animal,
// tenemos que sacar por pantalla el animal que es,
//resultado esperado
/**
 * perro
 * pajaro
 * gato
 *  */

const animals = [
  { name: "Wall", legs: 4, noise: "guau" },
  { name: "piolin", legs: 2, noise: "pio" },
  { name: "misi", legs: 4, noise: "miau" },
];

function pets(listAnimals) {
    for (let i = 0; i < listAnimals.length; i++) {
        if (listAnimals[i].noise==="guau"){
            console.log(`${listAnimals[i].name} es un perro y tiene ${listAnimals[i].legs} patas y su sonido es ${listAnimals[i].noise}`)
        } else if (listAnimals[i].noise==="pio"){
            console.log(`${listAnimals[i].name} es un pajaro y tiene ${listAnimals[i].legs} patas y su sonido es ${listAnimals[i].noise}`)
        } else {
            console.log(`${listAnimals[i].name} es un gato y tiene ${listAnimals[i].legs} patas y su sonido es ${listAnimals[i].noise}`)
        }
        
        
        
    }
}

pets(animals)