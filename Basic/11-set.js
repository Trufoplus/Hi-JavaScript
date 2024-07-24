// ESTRUCTURAS DE DATOS:
// set

let mySet = new Set()
// let mySet2 = {} // Esto no es un set vacio aunque podria parecer

// Inicializacion
// los datos detro de nuestro ser debe ir entre llave []
mySet = new Set(['frikone', 'dani', 'daniel', 35, 'dani@gmail.com'])
console.log(mySet) // Imprime el contenido del set



// Metodos comunes

//  add y delete
mySet.add('www.dani.es'); // Añade un elemento al set
console.log(mySet); // Imprime el set con el nuevo elemento añadido

mySet.delete('www.dani.es'); // Elimina el elemento indicado del set
console.log(mySet); // Imprime el set después de eliminar el elemento

console.log(mySet.delete('dani@gmail.com')); // Elimina y devuelve true si se eliminó, false si no

// empleando condicionales
if (mySet.delete('pablo')) {
    console.log('Elemento eliminado')
} else {
    console.log('El elemento no existe')
}





// hash
console.log(mySet.has('dani')); // Devuelve true si el elemento existe en el set
console.log(mySet.has('galvan')); // Devuelve false si el elemento no existe en el set




// size
console.log(mySet.size); // Devuelve la cantidad de elementos en el set





// Convertir un set en array
let myArray = Array.from(mySet);
console.log(myArray); // Imprime el array convertido desde el set

// Convertir array en set
mySet = new Set(myArray);
console.log(mySet); // Imprime el set convertido desde el array






// diferencia entre set y array

mySet.add('oniricoh');
mySet.add('oniricoh'); // Los sets NO admiten elementos duplicados
mySet.add('Oniricoh'); // Pero no tiene case sensitive (distingue entre mayúsculas y minúsculas)
console.log(mySet); // Imprime el set sin duplicados
