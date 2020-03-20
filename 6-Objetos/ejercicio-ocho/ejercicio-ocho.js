const body = document.querySelector('body');
const button = document.querySelector('button');
const select = document.querySelector('.select');
const text = document.querySelector('.emoji');

// var numero=0;;
// var max=100;
// var min=0;
// var numero1=0;
// var bandera=0;

button.addEventListener('onClick', update);

function update(){
    if (Math.floor(Math.random()*100) % 2 == 0) {
        body.classList.add('yellow');
        body.classList.remove('orange');
    }
    else {
        body.classList.add('orange');
        body.classList.remove('yellow')
    }
}



// const boton=document.querySelector('.boton');


button.addEventListener('click', () => {
    if (select.selectedIndex===0){
        text.innerHTML=':)';
    }
    else if(select.selectedIndex===1){
        text.innerHTML=':(';
    }   
});

// function mood(){
    
   
// }


