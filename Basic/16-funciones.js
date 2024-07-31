//////////////// FUNCIONES
/*
Es un bloque de código que realiza una operación específica
y para ejecutarse tiene que ser llamado.
*/

function myFunc() {
    console.log('¡Hola, función!');
} // Esta función lo único que hace es saludar.

myFunc(); // Invocamos la función para que se ejecute.

for (let i = 0; i < 5; i++) {
    myFunc();
} // Ejecuta la función 5 veces combinándola con un bucle.


///////////////////////////////////////////////////////////////////////////////
// CON PARÁMETROS
function myFuncWithParams(name) {
    console.log(`¡Hola, ${name}!`);
} // Entre paréntesis definimos el parámetro que le pedimos.

myFuncWithParams('Dani'); // Llamamos a la función pasándole un parámetro.


///////////////////////////////////////////////////////////////////////////////
// FUNCIONES ANÓNIMAS
const myAnonymousFunction = function(name) {
    console.log(`¡Hola, ${name}!`);
};  // Las funciones anónimas se almacenan en constantes.

myAnonymousFunction('Daniel');


///////////////////////////////////////////////////////////////////////////////
// ARROW FUNCTIONS
// Es una forma más concisa de escribir funciones.

const myFunc3 = (name) => {
    console.log(`¡Hola, ${name}!`);
};

myFunc3('YOYO');


///////////////////////////////////////////////////////////////////////////////
// PARÁMETROS
function sum(a, b) {
    console.log(a + b);
} // Le pasamos más de un parámetro separándolos por comas.

sum(5, 10);
sum(5); // Nos devolverá NaN porque no le estamos pasando nada en el 2º valor.

function defaultSum(a = 0, b = 0) {
    console.log(a + b);
} // Asignamos un valor por defecto a los parámetros de la función.

defaultSum(); // Devolverá 0.
defaultSum(4); // Devolverá 4.


///////////////////////////////////////////////////////////////////////////////
// RETORNO DE VALORES
// Retorna el resultado pero no imprime el resultado.

function mult(a, b) {
    return a * b;
} // Nos devuelve el valor pero no lo imprime por consola.

let result = mult(5, 10); // Guardamos el resultado en una variable.
console.log(result); // Imprimimos el resultado por consola.


///////////////////////////////////////////////////////////////////////////////
// FUNCIONES ANIDADAS
function extern() {
    console.log('Función externa');
    function intern() {
        console.log('Función interna');
    }
    intern(); // Invocamos a la función interna, solo se puede desde dentro.
} // Una función dentro de otra función.

extern();
// intern(); // Error: está fuera del scope, no lo podemos llamar.


///////////////////////////////////////////////////////////////////////////////
// FUNCIONES DE ORDEN SUPERIOR
// Básicamente son funciones que reciben otras funciones como argumento.

function applyFunc(func, param) {
    func(param);
} // Pasamos una función y el parámetro de la otra función.

applyFunc(myFunc3, 'Función de Orden Superior');


///////////////////////////////////////////////////////////////////////////////
// FOREACH
let myArray = [1, 2, 3, 'string', false];

myArray.forEach(element => {
    console.log(element);
}); // Otra forma de iterar sobre un array usando una función.


// Con un set:
let mySet = new Set(['frikone', 'dani', 'daniel', 35, 'dani@gmail.com']);
mySet.forEach(element => {
    console.log(element);
});
