//Una tienda ofrece un descuento del 15% sobre el total de la compra durante el mes de octubre.
//  Dado un mes y un importe, calcular cuál es la cantidad que se debe cobrar al cliente.

let prompt = require( 'prompt-sync')();

let formatoOk = true;

let a = prompt ('Itroduzca el mes');

a = Number(a);

if(Number.isNaN(a)) {
    console.log('Formato incorrecto');
}

let b = prompt ('Introduzca el importe');

b = Number (b);

if (Number.isNaN(b)) {
    console.log('Formato incorrecto');
    formatoOk = false;
}

if (formatoOk) {
    if(a===10) {
        let descuento = (b*15)/100;
        let total = b - descuento;
        console.log(`el precio final es de ${total}`);
    } else{
        console.log(`el precio sigue siendo  ${b}`);
    }
}