//Dado el array de alumnos de la clase, rellenar un nuevo
// array con todos los nombres menos el que le pasemos por argumentos.

let alumnos = ["Antonio", "Juan", "Mamen", "Angel" ,"Paula", "Noel", "Vera", "Daniel", "Franchesco"]

function killUser(user, arrayUsers) {
    let survivorUsers = [];
    let count = 0
    for (let i = 0; i < arrayUsers.length; i++) {
        if (arrayUsers[i] !== user){
        survivorUsers[count] = arrayUsers[i]
        count ++
        }
    }   console.log(survivorUsers)
}
 killUser("Noel", alumnos)
