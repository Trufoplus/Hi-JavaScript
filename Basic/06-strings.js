// Cadenas de texto (string)

// Concatenación de cadenas
let myName = 'Dani';
let greeting = 'Hola, ' + myName + '!';
console.log(greeting);
console.log(typeof greeting); // string

// Longitud de la cadena de texto
console.log(greeting.length); // 11

// Acceder a caracteres
console.log(greeting[0]); // H
console.log(greeting[14]); // undefined (fuera del rango de la cadena)

// Métodos comunes
console.log(greeting.toUpperCase()); // transforma a mayúsculas todo: HOLA, DANI!
console.log(greeting.toLowerCase()); // transforma a minúsculas todo: hola, dani!
console.log(greeting.indexOf('Dani')); // El índice en el que está la palabra 'Dani' dentro de 'greeting': 6
console.log(greeting.includes('Pepe')); // Te dice si la cadena incluye la palabra 'Pepe': false
console.log(greeting.slice(0, 5)); // trocea la cadena de texto: 'Hola,'
console.log(greeting.slice(5)); // muestra desde el índice 5 en adelante: ' Dani!'
console.log(greeting.replace('Dani', 'Alba')); // reemplaza 'Dani' por 'Alba': 'Hola, Alba!'

// Template literals (plantillas literales)

// Con las comillas invertidas podemos hacer un mensaje en varias líneas
let message = `Hola, esto es un mensaje
para hacer pruebas`;
console.log(message);

let email = 'dani@gmail.com';
// Para interpolar variables en una cadena de texto (parecido al f-string de Python)
console.log(`Hola, ${myName}! Tu email es ${email}`);
