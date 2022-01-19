/*
2.- Escribe un método que, dandole un número N que representa dónde
se encuentra actualmente el
minutero en un reloj, devuelva el ángulo
formado por el minutero y la marca de las 12 en punto en el reloj.
*/

function clockAngule(minuteClock) {
    let minuteAngle = minuteClock * 6;
    console.log(`El angulo formado es: ${minuteAngle}`)
}

clockAngule(15)