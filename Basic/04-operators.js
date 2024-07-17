// OPERADORES

/* Se utilizan para relacionar esos datos, para operar esos datos, 
para realizar operaciones con datos.
*/

// Operadores Aritméticos
console.log('Operadores Aritméticos:');
let a = 5;
let b = 10;

console.log(a + b); // Suma
console.log(b - a); // Resta
console.log(b * a); // Multiplicación
console.log(b / a); // División

console.log(a % b); // Módulo (resto de la división)
console.log(a ** b); // Exponente, potencias

a++; // Incremento (le suma 1)
console.log(a);

b--; // Decremento (le resta 1)
console.log(b);

// Operadores de Asignación
console.log('Operadores de Asignación:');
let myVariable = 2; // el igual es un operador de asignación
console.log(myVariable);
myVariable += 2;
console.log(myVariable);
myVariable -= 2;
console.log(myVariable);
myVariable *= 2;
console.log(myVariable);
myVariable /= 2;
console.log(myVariable);
myVariable %= 2;
console.log(myVariable);
myVariable **= 2;
console.log(myVariable);

// Operadores de Comparación
console.log('Operadores de Comparación:');
console.log(a > b); // false
console.log(a < b); // true
console.log(10 >= 10); // true
console.log(a <= b); // true
console.log(a == b); // false (comprobamos una igualdad por valor)
console.log(a); // comprobación a vale 6
console.log(a == '6'); // true (tanto número como cadena dará verdadero)
console.log(a === '6'); // false (comprobamos una igualdad por identidad (por tipo y valor))
console.log(a != 6); // false (a no es distinto de 6)
console.log(a !== '6'); // true (a es distinto de '6' string)
console.log(0 == false); // true (0 es falso)
console.log(1 == true); // true (1 es true)
console.log(2 == true); // false (solo 1 es true)
console.log(0 == ''); // true
console.log(0 == ' '); // false (cadena con un espacio)
console.log(0 == 'hola'); // false
console.log(0 == ""); // true
console.log(undefined == null); // true
console.log(undefined === null); // false

// Truthy values (valores verdaderos)
// Todos los números positivos y negativos menos el 0
// Todas las cadenas de texto menos las vacías
// El boolean true

// Falsy values (valores falsos)
// 0
// 0n
// null
// undefined
// NaN (Not A Number typeof NaN = number LuL)
// El boolean false
// Cadenas de texto vacías

// Operadores Lógicos (puertas lógicas)
console.log('Operadores Lógicos:');
// and (&&)
console.log(5 > 10 && 15 > 20); // false
console.log(5 < 10 && 15 < 20); // true
console.log(5 == 10 && 15 < 20 && 1 != '2'); // false

// or (||)
console.log(5 > 10 || 15 > 20); // false
console.log(5 < 10 || 15 < 20); // true
console.log(5 == 10 || 15 > 20 || 1 != '2'); // true

console.log(5 == 6 && 15 > 20 || 1 != '2'); // true

// not (!)
console.log(!true); // false
console.log(!(5 > 10 || 15 > 20)); // true (negamos el resultado)
console.log(!(5 < 10 && 15 < 20)); // false

// Operadores Ternarios (condicionales)
console.log('Operadores Ternarios:');

const isRaining = true;
// ? == if, : == else
isRaining ? console.log('Está lloviendo') : console.log('No está lloviendo');

