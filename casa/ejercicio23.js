/*
Leer tres números que denoten una fecha (día, mes, año). 
Comprobar que es una fecha válida. 
Si no es válida escribir un mensaje de error y volver a pedir los números. 
Si es válida escribir la fecha cambiando el número del mes por su nombre. 
Ej. si se introduce 1 2 2006, se deberá imprimir “1 de febrero de 2006”. 
El año debe ser mayor que 0. (Recuerda la estructura switch).
*/
const prompt = require("prompt-sync")();

//Paso 1: Crear las variables para día, mes y año:

let dia = Number(prompt("Introduca el día: "));
let mes = Number(prompt("Introduca el mes: "));
let year = Number(prompt("Introduca el año: "));

//Paso 2: comprobamos dentro de un bucle While (requisitos días, mes y año) si lo que ha introducido el usuario 
// es válido o no.
//si no está bien se queda en el bucle previo al switch, volviendo a pedir las variables del día, mes y año

while (dia <1 || dia >31 || mes < 1 || mes > 12 || year < 1 ){
    console.log("Fecha no válido.");
    dia = Number(prompt("Introduca el día: "));
    mes = Number(prompt("Introduca el mes: "));
    year = Number(prompt("Introduca el año: "));
}



// Paso 3: si está bien --> no bucle. 
//Creamos una variable con el nombre de los meses o un array

const names = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

//Switch meses (fuera del while)

switch (mes) {
    case 1:
        mes = names[0];
        break;
    case 2:
        mes = names[1];
        break;
    case 3:
        mes = names[2];
        break;
    case 4:
        mes = names[3];
        break;
    case 5:
        mes = names[4];
        break;
    case 6:
        mes = names[5];
        break;
    case 7:
        mes = names[6];
        break;
    case 8:
        mes = names[7];
        break;
    case 9:
        mes = names[8];
        break;
    case 10:
        mes = names[9];
        break;
    case 11:
        mes = names[10];
        break;
    case 12:
        mes = names[11];
        break; 
    default:
        console.log("Error");
        break;
}
//Console.log de la fecha

console.log(dia, mes, year);

/*
switch (año) {
    case 0:
         console.log("El año introducido debe ser mayor que 0.");
    break;

    default: 
        if (año > 0){
            console.log(`El día de hoy es ${dia} de ${mes} de ${año}`);
            }
        break;
} 

*/



