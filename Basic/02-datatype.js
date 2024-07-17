// TIPOS DE DATOS PRIMITIVOS
// Son los datos en los que se fundamenta nuestro codigo
// Los datos primitivos: son los datos basicos e inmutables
// Hay 7 tipos de datos primitivo:
// String (cadena de texto)
let cadena = 'Hola mundo'
let alias = 'Dhanny'
let email = 'dani@gmail.com'

// Números (number)
let age = 35 //Entero
let height = 1.77 // Decimal

// Booleanos (boolean)
let isStudent = false
let isTeacher = true

// Undefined
// Es una variable sin nungun valor asociado.
// Nos imprimira por consola (undefined = indefinido).
let undefinedValue
console.log(undefinedValue)

// Null
let nullValue = null

//Symbol
// Son valores unicos que pueden ser identificaddos como  identificadores de propiedades
// para los futuros objetos y evitar colisiones entre otra objetos
let mySymbol = Symbol('mysymbol')

//BigInt
// son numeros enteros extremadamente grandes
let myBigInt = BigInt(78364798162397486123978469128364)
let myBightInt2 = 94167781326478613289468177238n


// Mostramos los tipos de datos
console.log(typeof cadena) //imprimira string
console.log(typeof email) //imprimira string
console.log(typeof alias) //imprimira string

console.log(typeof age) //imprimira number
console.log(typeof height) //imprimira number

console.log(typeof isStudent) //imprimira boolean
console.log(typeof isTeacher) //imprimira boolean

console.log(typeof undefinedValue) //imprimira undefined
console.log(typeof nullValue) //imprimira object

console.log(typeof mySymbol) //imprimira symbol

console.log(typeof myBigInt) //imprimira bigint
console.log(typeof myBightInt2) //imprimira bigint