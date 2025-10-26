//Se pide realizar un algoritmo que lea dos números e indique el mayor, o si son iguales.
// require = forma nativa de importar molulos en node
let prompt = require( 'prompt-sync')();

let formatoOk = true;

let a = prompt ('Itroduzca A:');

a = Number(a);

if(Number.isNaN(a)) {
    console.log('Formato incorrecto');
}

let b = prompt ('Introduzca B:');

b = Number (b);

if (Number.isNaN(b)) {
    console.log('Formato incorrecto');
    formatoOk = false;
}

if (formatoOk) {
    if (a>b) {
        console.log(`el maximo es ${a}`);
    } else if (a===b) {
        console.log('Son iguales');
    } else {

        console.log(`El mayor es ${b}`);
    }
}