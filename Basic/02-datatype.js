// TIPOS DE DATOS PRIMITIVOS
// Son los datos en los que se fundamenta nuestro código
// Los datos primitivos son los datos básicos e inmutables
// Hay 7 tipos de datos primitivos:

// String (cadena de texto)
let cadena = 'Hola mundo';
let alias = 'Dhanny';
let email = 'dani@gmail.com';

// Números (number)
let age = 35; // Entero
let height = 1.77; // Decimal

// Booleanos (boolean)
let isStudent = false;
let isTeacher = true;

// Undefined
// Es una variable sin ningún valor asociado.
// Nos imprimirá por consola (undefined = indefinido).
let undefinedValue;
console.log(undefinedValue); // undefined

// Null
// Es un valor que representa la ausencia intencional de cualquier valor.
let nullValue = null;

// Symbol
// Son valores únicos que pueden ser usados como identificadores de propiedades
// para los futuros objetos y evitar colisiones entre otras propiedades.
let mySymbol = Symbol('mysymbol');

// BigInt
// Son números enteros extremadamente grandes
let myBigInt = BigInt(78364798162397486123978469128364);
let myBigInt2 = 94167781326478613289468177238n;

// Mostramos los tipos de datos
console.log(typeof cadena); // imprimirá string
console.log(typeof email); // imprimirá string
console.log(typeof alias); // imprimirá string

console.log(typeof age); // imprimirá number
console.log(typeof height); // imprimirá number

console.log(typeof isStudent); // imprimirá boolean
console.log(typeof isTeacher); // imprimirá boolean

console.log(typeof undefinedValue); // imprimirá undefined
console.log(typeof nullValue); // imprimirá object (esto es una peculiaridad de JavaScript)

console.log(typeof mySymbol); // imprimirá symbol

console.log(typeof myBigInt); // imprimirá bigint
console.log(typeof myBigInt2); // imprimirá bigint
