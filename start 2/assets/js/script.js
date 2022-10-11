var aldo = 'Aldo';
let cliente = 'cliente';
const tre = '3.14';

document.getElementById('concatena').innerHTML = `${aldo}, ${cliente}, ${tre}`;

//-----------------------------------------------

var total = `${aldo}, ${cliente}, ${tre}`;

document.getElementById('concatena2').innerHTML = (total);

//-----------------------------------------------

var lui = 'Mario';

document.getElementById('var').innerHTML = (lui);

{
    let lei = 'Carla';
    document.getElementById('let').innerHTML = (lei)
}

document.getElementById('final').innerHTML = (lui)

//-----------------------------------------------

var lei2 = 'Carla'

document.getElementById('let2').innerHTML = (lui)
document.getElementById('let3').innerHTML = (lei2)
document.getElementById('final2').innerHTML = (lei2)


//-----------------------------------------------

var iniziale = 15;

var addizione = iniziale + iniziale;
var incremento = addizione+1;

var sottrazione = iniziale - 10;
var decremento = sottrazione-1;

document.getElementById('iniziale').innerHTML += (iniziale);

document.getElementById('valore1').innerHTML += `${addizione}, ${incremento} `;

document.getElementById('valore2').innerHTML += `${sottrazione}, ${decremento}`;

document.getElementById('valore3').innerHTML += (iniziale)*3;

document.getElementById('valore4').innerHTML += (iniziale)/3;

document.getElementById('valore5').innerHTML += `${iniziale} è un numero`
