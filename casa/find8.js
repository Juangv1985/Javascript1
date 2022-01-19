/**
 * Realizar una funcion que cuente la cantidad de jugadores que hay
 * de piel negra y piel blanca
 */

const team = [
  { name: "Norris Cole", skin: "black" },
  { name: "Jaime Fernandez", skin: "white" },
  { name: "Michael Eric", skin: "black" },
  { name: "Francis Alonso", skin: "white" },
];

//Resultado esperado: En el equipo hay X jugadores negros y Y jugadores blancos.
let white = 0;
let black = 0;

function colors(arrayPlayers) {
  for (let i = 0; i < arrayPlayers.length; i++) {
    if (arrayPlayers[i].skin === "black") {
      black = black + 1;
    } else {
      white = white + 1;
    }
  }
  console.log(
    `En los equipos hay ${black} jugadores negros y ${white} jugadores blancos`
  );
}

colors(team);
