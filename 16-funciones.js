//////////////// FUNCIONES
/*
Es un bloque de codigo que realiza una operacione especifica
y para ejecutarse tiene que ser llamado
*/

function myFunc () {
    console.log('¡Hola, función!')
} // Esta funcion lo unico que hace en saludar

myFunc() // Invocamos la funcion para que se ejecute

for (let i = 0; i < 5; i++) {
    myFunc()
} // Ejecuta la funcion 5 veces combinandola con un bucle


///////////////////////////////////////////////////////////////////////////////
// CON PARAMETROS
function myFuncWithParams (name) {
    console.log(`¡Hola, ${name}!`)
} // Entre parentisis definimos el parametros que le pedimos

myFuncWithParams ('Dani') // LLamamos a la funcion pasandole un parametro




///////////////////////////////////////////////////////////////////////////////
// FUNCIONES ANONIMAS
const myAnonimusFunction = function(name) {
    console.log(`¡Hola, ${name}!`) 
}  // Las funciones anonimas se almacenan en constantes


myAnonimusFunction('Daniel')



///////////////////////////////////////////////////////////////////////////////
// ARROWS FUNCTIONS
// es una forma mas consisa de escribir funciones

const myFunc3 = (name) => {
    console.log(`¡Hola, ${name}!`) 
}

myFunc3('YOYO')



///////////////////////////////////////////////////////////////////////////////
// PARAMETROS
function sum(a, b) {
    console.log(a + b)
} // le pasamos mas de un parametro separandolor por comas

sum(5, 10)
sum(5) // nos devolvera NaN porque no le estamos pasando nada en el 2º valor


function defautlSum(a = 0, b = 0) {
    console.log(a + b)
} // Asignamos un valor por defecto a los parametros de la funcion

defautlSum() // devolvera 0
defautlSum(4) //devolvera 4



///////////////////////////////////////////////////////////////////////////////
// RETORNO DE VALORES
// retorna el resultado pero no imprime el resultado

function mult(a, b) {
    return a * b
} // nos devuleve el valor pero no lo imprime por consola

let result = mult(5, 10) // guardamos el resultado en una variable
console.log(result) // imprimimos el resultado por consola



///////////////////////////////////////////////////////////////////////////////
// FUNCIONES ANIDADAS
function extern() {
    console.log('Funcion externa')
    function intern() {
        console.log('Funcion interna')
    }
    intern() // invocamos a la funcion interna solo se puede desde dentro
} // una funcion dentro de otra funcion

extern()
// intern() // Error: esta fuera del scope no lo podemos llamar




///////////////////////////////////////////////////////////////////////////////
// FUNCIONES DE ORDEN SUPERIOR
// basicamente son funciones que resiven otras funciones como argumento

function applyFunc(func, param) {
    func(param)
} // pasamos una funcion y el parametro de la otra funcion

applyFunc(myFunc3, 'Funcion de Orden Superior')



///////////////////////////////////////////////////////////////////////////////
// FOREACH
myArray = new Array(1, 2, 3, 'string', false)

myArray.forEach(element => {
    console.log(element)
}) // otra forma de iterar sobre un array usando una funcion


// con un set:
mySet = new Set(['frikone', 'dani', 'daniel', 35, 'dani@gmail.com'])
mySet.forEach(element => {console.log(element)})