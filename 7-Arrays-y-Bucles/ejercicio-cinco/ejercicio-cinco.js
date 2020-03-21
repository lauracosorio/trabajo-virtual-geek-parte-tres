const numbers = [4, 23, 97, 13, 6, 4, 3, 2, 1,20, 100];
numbers[11] = 8;

let acc = 0;

for (let i = 0; i<numbers.length; i++){
    acc = (numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5]);
    acc = acc / 6;
}


media = average(numbers);

function average(numbers){
      
    var acc = 0; //variable acumuladora

    for(let  i = 0; i < numbers.length; i ++) {

        acc = acc + numbers[i]; // la acumuladora es igual a lo que está acumulando mas el array 
    }

    return acc / numbers.length; // devuelve lo que acumuló divido el length del array
}

 console.log("La media del número es: " + media);