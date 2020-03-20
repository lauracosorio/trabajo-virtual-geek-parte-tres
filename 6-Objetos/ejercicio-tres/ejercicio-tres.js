const geekGirl1 = {};
geekGirl1.name = 'Susana';
geekGirl1.age = 34;
geekGirl1.profession = 'periodista';

// geekGirl1.run = (phrase) => `Estoy ${phrase}`;
// geekGirl1.runAMarathon = (distance) => ` un maratón de ${distance} kilómetros`;

// console.log(`${geekGirl1.run('corriendo')}${geekGirl1.runAMarathon(50)}`);

geekGirl1.showBio = function (){
    alert ('Mi nombre es ' + this.name + ' tengo ' +  this.age + ' años y soy ' + this.profession);
}

console.log(geekGirl1.showBio());

const geekGirl2 = {};
geekGirl2.name = 'Rocio';
geekGirl2.age = 25;
geekGirl2.profession = 'actriz';

geekGirl2.showBio = function (){
    alert ('Mi nombre es ' + this.name + ' tengo ' +  this.age + ' años y soy ' + this.profession);
}

console.log(geekGirl2.showBio());