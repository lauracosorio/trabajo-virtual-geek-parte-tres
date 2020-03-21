'use strict'

const contador = {
valorInicial: 0,
valorMaximoPermitido: 10,
valorMinimoPermitido: 0,
valorActual: 0,
aumentarValor: +1,
disminuirValor: -1,
}
// .aumentarValorValor = aumentarValorValor


contador.aumentar = function() {
    this.valorActual = this.valorActual + this.aumentarValor;
    return this.valorActual;
}
console.log(contador.aumentar());

contador.disminuir = function() {
    
    this.valorActual = this.valorActual + this.disminuirValor;

    return this.valorActual;
}
console.log(contador.disminuir());

contador.restablecer = function() {
       this.valorActual= 0;
    return this.valorActual;
}
console.log(contador.restablecer());
