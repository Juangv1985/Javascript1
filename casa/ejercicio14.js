/**
 * Construir un algoritmo que resuelva el problema que tienen unos surtidores de gasolina,
 * que registran lo que surten en galones, pero el precio de la gasolina se fija en litros.
 * El algoritmo debe calcular e imprimr el precio que hay que cobrarle al cliente.
 * Precio gasolina = 1.333€/litro
 * 1 galon = 3.78541 litros
 */

 const prompt = require("prompt-sync")();

 let galon = Number(prompt("Introduce el número de galones: "));

const multiply =galon*3.78531*1.333
    console.log("El precio es: ",multiply)
 

 
/*
    const prompt = require("prompt-sync")();

    const gallons = Number(prompt("Introduce la cantidad de galones: "));
    
    const gallonsToLitres = 3.78541;
    const litrePrice = 1.333;
    
    /* const litres = gallons * gallonsToLitres;
    let price = litres * litrePrice; */
    
    // Opción 2
    /*
    let price = gallons * gallonsToLitres * litrePrice;
    
    console.log(
      ${gallons} galones, son ${litres} litros y el precio es ${price} €
    );*/