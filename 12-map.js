//////// ESTRUCTURAS DE DATOS:
//////////// MAPS
/* 
Un map esta formado por un par de elementos, uno es una clave y el otro 
un valor.
*/

// DECLARACION:

let myMap = new Map() // asi declaramos un map vacio

console.log(myMap)


// INICIALIZACION

myMap = new Map([
    ['name', 'dani'],
    ['email', 'dani@gmail.com'],
    ['age', 35]
])

console.log(myMap)



// METODOS y PROPIEDADES

// set
myMap.set('alias', 'dhanny') // agregammos un nuevo valor a nuestro map
console.log(myMap)

myMap.set('name', 'daniel') //actualizamos el valor de la clave de nuestro mapa
console.log(myMap)


// GET
console.log(myMap.get('name')) // Para acceder a una clave de nuestro map


// HAS
console.log(myMap.has('surname')) // Devuelve un boolean si existe esa clave o no en nuestro map.


// DELETE
myMap.delete('email') // Borra el elemento indicado de nuestro map
console.log(myMap)


// CLEAR
myMap.clear() //Borra el map entero
console.log(myMap)


// KEYS, VALUES and ENTRIES
myMap.set('alias', 'dhanny')
myMap.set('name', 'dani')
console.log(myMap.keys()) // Devuelve las claves del map
console.log(myMap.values()) // Devuelve los valores del map
console.log(myMap.entries()) //Devuelve los pares clave, valor del map


// size
console.log(myMap.size)  //Numero de elemento en nuestro map

//////// ESTRUCTURAS DE DATOS:
//////////// MAPS
/* 
Un map está formado por un par de elementos, uno es una clave y el otro 
un valor.
*/

// DECLARACION:

let myMap1 = new Map(); // Así declaramos un map vacío

console.log(myMap1);

// INICIALIZACION

myMap = new Map([
    ['name', 'dani'],
    ['email', 'dani@gmail.com'],
    ['age', 35]
]);

console.log(myMap);

// METODOS y PROPIEDADES

// set
myMap.set('alias', 'dhanny'); // Agregamos un nuevo valor a nuestro map
console.log(myMap);

myMap.set('name', 'daniel'); // Actualizamos el valor de la clave de nuestro mapa
console.log(myMap);

// GET
console.log(myMap.get('name')); // Para acceder a una clave de nuestro map

// HAS
console.log(myMap.has('surname')); // Devuelve un booleano si existe esa clave o no en nuestro map.

// DELETE
myMap.delete('email'); // Borra el elemento indicado de nuestro map
console.log(myMap);

// CLEAR
myMap.clear(); // Borra el map entero
console.log(myMap);

// KEYS, VALUES and ENTRIES
myMap.set('alias', 'dhanny');
myMap.set('name', 'dani');
console.log([...myMap.keys()]); // Devuelve las claves del map (convertido a array para mejor legibilidad)
console.log([...myMap.values()]); // Devuelve los valores del map (convertido a array para mejor legibilidad)
console.log([...myMap.entries()]); // Devuelve los pares clave, valor del map (convertido a array para mejor legibilidad)

// size
console.log(myMap.size); // Número de elementos en nuestro map
