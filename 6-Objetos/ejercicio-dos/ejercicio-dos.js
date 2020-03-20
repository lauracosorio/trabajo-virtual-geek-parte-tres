const geekGirl1 = {};
geekGirl1.name = 'Susana';
geekGirl1.age = 34;
geekGirl1.profession = 'periodista';

geekGirl1.run = (phrase) => `Estoy ${phrase}`;
geekGirl1.runAMarathon = (distance) => ` un maratón de ${distance} kilómetros`;


console.log(`${geekGirl1.run('corriendo')}${geekGirl1.runAMarathon(50)}`);