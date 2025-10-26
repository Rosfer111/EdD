//Realizar algoritmo que nos diga si una persona puede acceder a cursar un ciclo formativo 
// de grado superior o no. Para acceder a un grado superior, si se tiene un título de bachiller,
//  en caso de no tenerlo, se puede acceder si hemos superado una prueba de acceso.

let prompt = require( 'prompt-sync')();

let tBachiller = prompt ('¿Tienes bachiller?');

if(tBachiller === 'si') {
    console.log('Si, puedes acceder al ciclo.');
}else {
    if(tBachiller === 'no') {
        let pAcceso = prompt ('¿Has superado la prueba de acceso');
        if(pAcceso === 'si'){
            console.log('Si, puedes acceder al ciclo.');
        }else{
            console.log('No, no puedes acceder al ciclo.')
        }
    }
}