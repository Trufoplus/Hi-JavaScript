
// 1. Escribe un comentario en una línea
// Esto es un comentario escrito en una linea.


// 2. Escribe un comentario en varias líneas
/*
Esto es un comentario,
pero escrito en varias lineas
*/


// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let string = 'Hola mundo'
let number = 13
let boolean = true
let undefinedValue
let nullValue = null
let mySymbool = Symbol('mysymbol')
let bigInt = BigInt(4378561423708956)
let bigInt2 = 374878326498n


// 4. Imprime por consola el valor de todas las variables
console.log(string)
console.log(number)
console.log(boolean)
console.log(undefinedValue)
console.log(nullValue)
console.log(mySymbool)
console.log(bigInt)
console.log(bigInt2)


// 5. Imprime por consola el tipo de todas las variables
console.log(typeof string)
console.log(typeof number)
console.log(typeof boolean)
console.log(typeof undefinedValue)
console.log(typeof nullValue)
console.log(typeof mySymbool)
console.log(typeof bigInt)
console.log(typeof bigInt2)


// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
string = 'Hola planeta'
number = 35
boolean = false
mySymbool = Symbol('myothersymbol')
bigInt = BigInt(4378561423708)
bigInt2 = 374878326n


// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
string = Symbol('Hola planeta')
number = 35n
boolean = BigInt(125679389867)
mySymbool = false
bigInt = 15
bigInt2 = '374878326'


// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const stringCon = 'Hola mundo'
const numberCon = 13
const booleanCon = true
// const undefinedValue no puede ser constante
const nullValueCon = null
const mySymboolCon = Symbol('mysymbol')
const bigIntCon = BigInt(4378561423708956)
const bigInt2Con = 374878326498n


// 9. A continuación, modifica los valores de las constantes
// respuesta: las contantes no se pueden modificar

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarser
// stringCon = 'Nuevo valor'; // Error
// numberCon = 25; // Error
// booleanCon = false; // Error
// nullValueCon = undefined; // Error
// mySymbolCon = Symbol('nuevo simbolo'); // Error
// bigIntCon = BigInt(1); // Error
// bigInt2Con = 1n; // Error