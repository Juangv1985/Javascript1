const prompt = require("prompt-sync")();

let name = prompt("Introduce el nombre del alumno: ");

while (name !== "") {
  let exercisesMark = Number(prompt("Introduce la nota practica: "));
  let problemsMark = Number(prompt("Introduce la nota de los problemas: "));
  let theoryMark = Number(prompt("Introduce la nota teorica: "));

  if (
    exercisesMark < 0 ||
    exercisesMark > 10 ||
    problemsMark < 0 ||
    problemsMark > 10 ||
    theoryMark < 0 ||
    theoryMark > 10
  ) {
    console.log("Ha habido un error con tus notas. Deben estar entre 1 y 10");
  } else {
    const finalMark =
      exercisesMark * 0.1 + problemsMark * 0.5 + theoryMark * 0.4;
    console.log(`Tu nota final es de ${finalMark} sobre 10`);
  }

  name = prompt("Introduce otro nombre de alumno: ");
}