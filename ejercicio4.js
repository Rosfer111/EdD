//Solicita por teclado tres números; si el primero es negativo, muestra el producto de 
// los tres y si no lo es, muestra la suma.


const prompt = require( 'prompt-sync')();

let formatoOK = true;

let a = prompt ('Itroduzca A:');

a = Number(a);

if(Number.isNaN(a)) {
    console.log('Formato incorrecto');
}

let b = prompt ('Introduzca B:');

b = Number (b);

if (Number.isNaN(b)) {
    console.log('Formato incorrecto');
    formatoOK = false;
}

c = Number (c)

if(Number.isNaN(c)) {
    console.log('Formato incorrecot');
    formatoOK = false;
}

if (formatoOK) {
    if(a<0){
        let producto = a*b*c;
        console.log(producto);
    }else{
        let suma = a+b+c;
        console.log(suma);
    }
}

