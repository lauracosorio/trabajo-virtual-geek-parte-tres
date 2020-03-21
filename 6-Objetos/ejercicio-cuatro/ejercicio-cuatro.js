const eventoboton = document.querySelector('.boton');

const imprimirevento = (evento) => {
    console.log(evento);
}

eventoboton.addEventListener('click', imprimirevento);