/**
 * Realizar una funcion que cuente la cantidad de jugadores que hay
 * de piel negra y piel blanca y te diga nombres de cada jugador según su equipo
 */

const team = [
  { name: "Norris Cole", skin: "black" },
  { name: "Jaime Fernandez", skin: "white" },
  { name: "Michael Eric", skin: "black" },
  { name: "Francis Alonso", skin: "white" },
];

//Resultado esperado: En el equipo hay X jugadores negros y Y jugadores blancos.

let black = 0;
let white = 0;
let namesBlack = [];
let namesWhite = [];

function skinColors(arrayPlayers) {
  for (let i = 0; i < arrayPlayers.length; i++) {
    if (arrayPlayers[i].skin === "black") {
      black++;
      namesBlack[black] = arrayPlayers[i].name; //pone [black] para añadir los contadores de la variable black
    } else {
      white++;
      namesWhite[white] = arrayPlayers[i].name;
    }
  }
}

skinColors(team);

console.log(
  `En los equipos hay ${black} jugadores negros, se llaman ${namesBlack} y ${white} jugadores blancos que se llaman ${namesWhite}`
);
