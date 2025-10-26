//Realizar un algoritmo que dado un número entero, visualice en pantalla si es par o impar. 
// En el caso de ser 0, debe visualizar “el número no es par ni impar” 
// (para que un número sea par, se debe dividir entre dos y que su resto sea 0).

let prompt = require( 'prompt-sync')();

let formatoOk = true;

let a = prompt ('Itroduzca un numero');

a = Number(a);

if(Number.isNaN(a)) {
    console.log('Formato incorrecto');
}

if (formatoOk) {
    if (a===0) {
        console.log("el numero no es par ni impar");
    } else {
        if (a%2 ===0) {
            console.log('El numero es par');
        }else{
            console.log('El numero es impar');
        }

    }
}