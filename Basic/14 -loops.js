////////// LOOPS o BUCLES
/*
Un bucle es una estructura de control para repetir un bloque de código
mientras una condición sea verdadera.
 */


// FOR
/* 
Se ejecuta mientras la condición sea true; si es false, deja de ejecutar.
Usamos un for (en el ejemplo abajo) y entre paréntesis ponemos la condición. 
Declaramos una variable, le damos un valor, y mientras sea menor que 5 será true. 
La tercera condición se ejecuta después de cada vuelta del bucle y lo que hace 
es sumar 1 a la variable i.
*/
for (let i = 0; i < 5; i++) {
    console.log('Hola mundo');
} 


// Para iterar sobre un listado, hacemos lo siguiente:
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    console.log(`Elemento: ${numbers[i]}`);
}


///////////////////////////////////////////////////////////////////////////////
// WHILE
// En un while, la variable se declara fuera, dentro solo la condición.
let i = 0;
while (i < 5) {
    console.log(`Hola ${i}`);
    i++;
}

/*
Creamos un bucle infinito así:

while(true){

}
*/


///////////////////////////////////////////////////////////////////////////////
// DO WHILE
// Mínimo una vez se ejecutará el bloque de código.

i = 6;
do {
    console.log(`Hola ${i}`);
    i++;
} while (i < 5); // A pesar de que i es mayor a 5, se ejecutará al menos una vez.



///////////////////////////////////////////////////////////////////////////////
// FOR OF
// Es para recorrer algo que sea iterable (una estructura de datos).
let myArray = [1, 2, 3, 'string', false];
let mySet = new Set(['frikone', 'dani', 'daniel', 35, 'dani@gmail.com']);
let myMap = new Map([
    ['name', 'dani'],
    ['email', 'dani@gmail.com'],
    ['age', 35]
]);

for (let valor of myArray) {
    console.log(valor);
} // Nos devolverá cada dato de nuestro array/lista.

for (let valor of mySet) {
    console.log(valor);
}

for (let [clave, valor] of myMap) {
    console.log(`${clave}: ${valor}`);
} 

let myString = 'Hola JavaScript';
for (let valor of myString) {
    console.log(valor);
} // Iterará sobre cada letra del string.



///////////////////////////////////////////////////////////////////////////////
/// BUENAS PRACTICAS
/*
+ Revisar que la condición no cree un bucle infinito.
+ Emplear break y continue para evitar bucles infinitos.
*/

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    } else if (i === 7) {
        break;
    }
    console.log(`Hola mundo ${i}`);
}
