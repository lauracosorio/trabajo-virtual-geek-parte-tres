'use strict';
let arbolito = 0;
let cont = 1;
let triangulito ='▲';
let estrella = '★'
let tronco = '|';
let str = " ";

arbolito = prompt('¿De qué altura quieres el arbolito?');

console.log(arbolito + estrella);

var acc = " " ;

for ( let i = 0; i < arbolito; i++) {

    acc = acc + triangulito;
    console.log(acc);
}
console.log(arbolito + tronco);