////////// LOOPS o BUCLES
/*
Un bucle es una estructura de control, para repetir un bloque de codigo
mientras una condicion sea verdadera.
 */


// FOR
/* 
se ejecuta mientra la condicion sea true si es false deja de ejecutar
Usamos un for (en el ejemplo abajo) y entre parentecis ponemos la condicion, declaramos una
variable le damos un valor, y mientras sea menor que 5 sera true, la 
tercera condicion se ejecuta despues de cada vuelta del bucle y lo que hace
es sumar 1 a la variabble i .
*/
for (let i = 0; i < 5; i++) {
    console.log('Hola mundo')
} 


// Para iterar sobre un listado, hacemos lo siguiente:
const numbers = [1, 2, 3, 4, 5]

for (let i = 0; i < numbers.length; i++) {
    console.log(`Elemento: ${numbers[i]}`)
}


///////////////////////////////////////////////////////////////////////////////
// WHILE
// en un while la variable se declare fuera, dentro solo la condicion
let i = 0
while (i < 5) {
    console.log(`Hola ${i}`)
    i++
}

/*
creamos un bucle infinito asi:

while(true){

}
*/


///////////////////////////////////////////////////////////////////////////////
// DO WHILE
//minimo una vez se ejecutara el bloque de codigo

i = 6
do {
    console.log(`Hola ${i}`)
    i++
} while (i < 5) // a pesar de que i es mayor a 5 se ejecutara al menos una vez



///////////////////////////////////////////////////////////////////////////////
// FOR OF
// es para recorrer algo que sea interable (una estructura de datos)
myArray = new Array(1, 2, 3, 'string', false)
mySet = new Set(['frikone', 'dani', 'daniel', 35, 'dani@gmail.com'])
myMap = new Map([
    ['name', 'dani'],
    ['email', 'dani@gmail.com'],
    ['age', 35]
])

for (let valor of myArray) {
    console.log(valor)
} //nos devolvera cada dato de nuestro array/lista

for (let valor of mySet) {
    console.log(valor)
} 


for (let valor of myMap) {
    console.log(valor)
} 



myString = 'Hola JavaScript'
for (let valor of myString) {
    console.log(valor)
} // iterara sobre cada letra del array



///////////////////////////////////////////////////////////////////////////////
/// BUENAS PRACTICAS
/*
+ Revisar que la condicion no cree un bucle infinito
+ Emplear break y continue para evitar bucle infinito
*/

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue
    } else if (i == 7) {
        break
    }
    console.log(`Hola mundo ${i}`)
} 