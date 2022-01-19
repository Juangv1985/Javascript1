const prompt = require("prompt-sync")();

let password;

let tries = 1;

/* while (password !== "eureka" && tries < 3) {
  // mientras que el password no sea "eureka" y hagas menos de 3 intentos repite
  password = prompt("Vuelve a introducir la contraseña: ");
  tries++;
} */

do {
  password = prompt("Introduce la contraseña: ");
  tries++;
} while (password !== "eureka" && tries < 3);

//mensaje para cuando acierte y otro para cuando se equivoque mas de 3 veces

if (password === "eureka") {
  console.log("Contraseña correcta");
} else {
  console.log("Te has equivocado mas de 3 veces, vete a pastar");
}
