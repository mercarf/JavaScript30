'use strict';

//Array
const characters = [{ name: 'Mickey', age: 12 }, { name: 'Minnie', age: 10 }, { name: 'Donald', age: 10 }, { name: 'Daisy', age: 8 }];


function makeGreen() {
    const magic = document.querySelector('.makeGreen');
    magic.style.color = '#BADA55';
    magic.style.fontSize = '100px';
}

// Manera básica/regular de mostrar un mensaje en la consola
console.log('hello');

// Mostrar mensaje interpolando (%s)
console.log('Hello I am a %s string!', '💩');

// Mostrar estilos CSS en consola (%c)
console.log('%c I am some great text', 'font-size:50px; background:steelblue; text-shadow: 10px 10px 0 #44e4e9')

// mostrar warning!
console.warn('OH NOOO soy un warn');

// Mostrar Error :|
console.error('Shit! Soy un error');

// Mostrar Info
console.info('Soy informacion: El sexo de la tortuga es determinado por la temperatura');

// Testeo que la clase del elemento seleccionado contenga 'ouch'
const p = document.querySelector('.ouch');
const magic = document.querySelector('.makeGreen');

console.assert(p.classList.contains('ouch'), 'That is wrong!');//De este mensaje no sale error ya que cumple el test
console.assert(magic.classList.contains('ouch'), 'That is wrong!');

// Limpia la consola
// console.clear(); //limpiamos la consola de todo lo anterior a este momento y muestra un mensaje que lo acalara

// Visualizando elementos del DOM
console.log(magic); //muestra el elemento indicado
console.dir(magic); //muestra las propiedades del elemento indicado

// console.clear(); //limpiamos la consola de todo lo anterior a este momento y muestra un mensaje que lo acalara

// Agrupando juntos
characters.forEach(character => {
    console.groupCollapsed(`${character.name}`);
    console.log(`This is ${character.name}`);
    console.log(`${character.name} is ${character.age} years old`);
    console.log(`His name has ${character.name.length} characters`);
    console.groupEnd(`${character.name}`);
});

// Contar las veces que se repiten los nombres

console.count('Amelia');
console.count('Amelia');
console.count('Paccino');
console.count('Paccino');
console.count('Amelia');
console.count('Paccino');
console.count('Amelia');
console.count('Paccino');
console.count('Paccino');
console.count('Amelia');
console.count('Paccino');
console.count('Paccino');

// Tiempo de respuesta
console.time('fetching data');
fetch('https://api.github.com/users/mercarf')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });

// Mostrar tabla a partir del array de personajes
console.table(characters);
