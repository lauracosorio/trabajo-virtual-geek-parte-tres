const message1 = document.getElementById('message1');
const message2 = document.getElementById('message2');
const button = button.getElementById('button');

function viewsArrayInput () {
 
    var arrayInput = new Array();
    var inputsValues = document.getElementsByClassName('datoInput');
    
    namesValues = [].map.call(inputsValues, function(dataInput){
        arrayInput.push(dataInput.value);
    });

    for (const movies of arrayInput) { //El for of es para arrays ya definidos
        console.log(`¡A mi también me encantó ${movies}! Tenemos mucho en común, humana`)
        // message1.innerHTML = (`¡A mi también me encantó ${movies}! Tenemos mucho en común, humana`);
        // message2.innerHTML = (`¡A mi también me encantó ${movies}! Tenemos mucho en común, humana`);
    }
    
} 