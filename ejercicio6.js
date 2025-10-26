//Un colegio desea saber qué porcentaje de niños y qué porcentaje de niñas hay en el curso actual. 
// Diseñar un algoritmo para este propósito.

let prompt = require( 'prompt-sync')();

let formatoOk = true;

let a = prompt ('Itroduzca el numero de niños:');

a = Number(a);

if(Number.isNaN(a)) {
    console.log('Formato incorrecto');
}

let b = prompt ('Introduzca el numero de niñas:');

b = Number (b);

if (Number.isNaN(b)) {
    console.log('Formato incorrecto');
    formatoOk = false;
}

if (formatoOk) {
    let total = a+b;
    let pNiños = (a/total) * 100;
    let pNiñas = (b/total) * 100;
    console.log(`el porcentaje de niños es de ${pNiños.toFixed(2)}% y el porcentaje de niñas es de ${pNiñas.toFixed(2)}%.`);
}