// Ejemplo de creación de variables en JavaScript

// Usando var (aunque no es recomendado actualmente)
var helloWorld = 'Hola, JavaScript'; // definimos una variable con var
console.log(helloWorld);

helloWorld = 'Hola de nuevo'; // cambiamos el valor de la variable
console.log(helloWorld);


// Usando let (recomendado para variables que cambian de valor)
let helloWorld2 = 'Hola, JavaScript 2';
console.log(helloWorld2);

helloWorld2 = 'Hola de nuevo 2'; // cambiamos el valor de la variable
console.log(helloWorld2);


// Usando const (recomendado para variables constantes que no cambian de valor)
const helloWorld3 = 'Hola, JavaScript 3';
console.log(helloWorld3);

// Intentar cambiar el valor de una constante generará un error
// helloWorld3 = 'Hola de nuevo'; // Esto generará un error