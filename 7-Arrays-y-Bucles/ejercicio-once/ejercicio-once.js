'use strict';
let arbolito = 0;
let cont = 1;
let str=' ';
let triangulito ='▲';
let estrella = '★'
let tronco = '|';

arbolito = prompt('¿De qué altura quieres el arbolito?');

console.log(str.repeat(arbolito) + estrella);

for (let i = arbolito; i >= 0; i--) {
        
    console.log(str.repeat(i)+triangulito.repeat(cont));
    cont+=2;
}
console.log(str.repeat(arbolito)+tronco);

    