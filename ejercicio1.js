let prompt = require( 'prompt-sync')()
let a = prompt ('introduce A:');
console.log(typeof b);
let b = prompt ('introduce B:');
console.log(typeof a);
bTemporal=b;
b=a;
a=bTemporal;
console.log(`a = ${a}, b = ${b}`);