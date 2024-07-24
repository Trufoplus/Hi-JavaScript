// ESTRUCTURAS DE DATOS:
// ARRAYS

// Como declaramos un array

let myArray = [] //esta forma es la mas directa y rapida
let myArray2 = new Array() // También crea un array vacío

console.log(myArray) //Imprime una estructura de array vacia
console.log(myArray2) //Tambien imprime una estructura de array vacia

// Introducimos un dato en los arrays
myArray = [3]; // Crea un array con un único elemento 3
myArray2 = new Array(3); // Crea un array con 3 posiciones, todas undefined
console.log(myArray) // Imprime [3]
console.log(myArray2) // Imprime [undefined, undefined, undefined]

//Introducimos mas de un dato en los arrays
myArray = [1, 2, 3, 'hola', true]; // Array con varios tipos de datos
myArray2 = new Array(1, 2, 3, 'string', false); // Array con varios elementos
console.log(myArray); // Imprime [1, 2, 3, 'hola', true]
console.log(myArray2); // Imprime [1, 2, 3, 'string', false]



// Introducimos en los datos reservados con 'new Array()'
myArray2 = new Array(3) // Crea un array con 3 elementos undefined
myArray2[0] = 'cero'
myArray2[1] = 'uno'
myArray2[2] = 'dos'
// en el espacio 3 no hay nada, dara como empty item
myArray2[4] = 'cuatro' //metemos un dato en un espacio no reservado y funciona igual. (casos extraños de js)
console.log(myArray2) // Imprime ['cero', 'uno', 'dos', empty, 'cuatro']

//funciona igual con el array simple
myArray = []
myArray[0] = 'cero'
myArray[1] = 'uno'
console.log(myArray) // Imprime ['cero', 'uno']



// push y pop
myArray.push('Dani'); // Añade 'Dani' al final del array
myArray.push('Daniel');
myArray.push(35);
myArray.push('Tenerife');
console.log(myArray); // Imprime ['cero', 'uno', 'Dani', 'Daniel', 35, 'Tenerife']

myArray.pop(); // Elimina el último elemento
console.log(myArray.pop()); // Imprime 'Daniel', que es el último elemento después de eliminar 'Tenerife'
console.log(myArray); // Imprime ['cero', 'uno', 'Dani', 'Daniel']




// shift y unshift
myArray.shift(); // Elimina el primer elemento
console.log(myArray.shift()); // Imprime 'uno', que es el primer elemento después de eliminar 'cero'
console.log(myArray); // Imprime ['Dani', 'Daniel']

myArray.unshift('lil.d.life', 'frikone'); // Añade elementos al principio
console.log(myArray); // Imprime ['lil.d.life', 'frikone', 'Dani', 'Daniel']





// length
console.log(myArray.length) //longitud de nuestro array: 4




// clear
myArray = [] //lo volvemos a implementar y lo borramos
myArray.length = 0 // tambien borra el array dandole una longitud de 0
console.log(myArray) // Imprime []


// slice
myArray.unshift('lil.d.life', 'frikone', 'dani', 'daniel'); // Añade elementos al inicio
myArray.push(35); // Añade un elemento al final

let myNewArray = myArray.slice(1, 3); // Obtiene una porción del array desde el índice 1 hasta el 2 (no incluye el 3)
console.log(myArray); // Imprime ['lil.d.life', 'frikone', 'dani', 'daniel', 35]
console.log(myNewArray); // Imprime ['frikone', 'dani']





// splice
myArray.splice(1, 3); // Elimina 3 elementos a partir del índice 1
console.log(myArray); // Imprime ['lil.d.life', 35]

// Reinicializamos el array para más ejemplos
myArray = ['lil.d.life', 'frikone', 'dani', 'daniel', 35];
console.log(myArray); // Imprime ['lil.d.life', 'frikone', 'dani', 'daniel', 35]

myArray.splice(1, 2, 'Nueva entrada'); // Elimina 2 elementos desde el índice 1 y añade 'Nueva entrada'
console.log(myArray); // Imprime ['lil.d.life', 'Nueva entrada', 'daniel', 35]

