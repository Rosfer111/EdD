let prompt = require( 'prompt-sync')()

let num1 = prompt("introduzca un numero")
console.log(typeof num1+num1);
num1 = Number(num1);
console.log(typeof num1 + num1);

let num2 = prompt ("introduzca otro numero");

let suma = num1+num2;
let resta = num1-num2;
let producto = num1*num2;
let division = num1/num2;
console.log (suma + resta + producto + division);

