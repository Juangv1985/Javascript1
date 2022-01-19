/**Ejercicio11
 * En una tienda efectuan un descuento a los clientes dependiendo de la cantidad de la compra.
 * El descuento se basa en:
 * Si el monto es menor que 500€ -> No hay descuento.
 * Si el monto está comprendido entre 500€ y 1000€ inclusive -> 5% descuento.
 * Si el monto está entre 1000€ y 7000€ inclusive -> 10% descuento.
 * Si el monto está entre 7000€ y 15000€ inclusive -> 20% descuento.
 * Más de 15000€ -> 25% descuento.
 * 
 * Imprimir (escribir) el precio final.
 */

 const prompt = require("prompt-sync")();

 const price = Number(prompt("Introduce el precio del producto: "));

if (price>499 && price<=1000){
    total =price-price*5/100
    console.log("Su producto tiene un 5% de descuento y su total es: ",total);
} 
else if (price>1000 && price<=7000){
    total = price-price*10/100
    console.log("Su producto tiene un 10% de descuento y su total es: ",total);
}
else if (price>7000 && price<=15000){
    total = price-price*20/100
    console.log("Su prodcuto tiene un 20% de descuento y su total es: ",total);
}
else if (price>15000){
    total= price-price*25/100
    console.log("Su producto tiene un 25% de descuento y su total es: ",total);
} else {
    console.log("Su producto no tiene descuento al ser menor de 500€ ")
}


/*
switch (price) {
    case price>499 && price<=1000:
     total =price-price*5/100
     console.log("Su producto tiene un 5% de descuento y su total es: ",total);   
        break;
    case price>1000 && price<=7000:
     total = price-price*10/100
     console.log("Su producto tiene un 10% de descuento y su total es: ",total);
        break;
    case price>7000 && price<=15000:
     total = price-price*20/100
     console.log("Su prodcuto tiene un 20% de descuento y su total es: ",total);
        break;
    case price>15000:
     total= price-price*25/100
     console.log("Su producto tiene un 25% de descuento y su total es: ",total);
        break;
    default:
        console.log("Su producto no tiene descuento al ser menor de 500€ ")
        break;
}
*/

//Con switch no soy capaz d hacerlo

/* if (amount < 500) {
    console.log("No se le ha aplicado descuento");
} else if (amount <= 1000) {
    console.log("Tienes un 5% de descuento. El total a pagar es: ", amount * 0.95);
} else if (amount <= 7000) {
    console.log("Tienes un 10% de descuento. El total a pagar es: ", amount * 0.9);
} else if (amount <= 15000) {
    console.log("Tienes un 20% de descuento. El total a pagar es: ", amount * 0.8);
} else {
    console.log("Tienes un 25% de descuento. El total a pagar es: ", amount * 0.75);
} */

/**
 * let discount;
let totalAmount;

if (amount < 500) {
  discount = 0;
  totalAmount = amount;
} else if (amount <= 1000) {
  discount = 5;
  totalAmount = amount * 0.95;
} else if (amount <= 7000) {
  discount = 10;
  totalAmount = amount * 0.9;
} else if (amount <= 15000) {
  discount = 20;
  totalAmount = amount * 0.8;
} else {
  discount = 25;
  totalAmount = amount * 0.75;
}
console.log(
  Tienes un ${discount}% de descuento. El total a pagar es: ${totalAmount}
);
 */