/////////// Objetos /////////////////

/* 
Todo lo que no es un dato primitivo es un objeto

Los objetos se estructuran parecido a como se estructuran los mapas

Los objetos son una colección de tipo clave-valor y funcionalidades
*/

// Sintaxis (creamos un objeto 'person')
let person = {
    name: "Dani",
    edad: 37,
    alias: 'TrufoPlus',
}

// Cómo accedemos a las propiedades del objeto
// Notación de punto (escribe el objeto seguido de un punto)
console.log('\n', person.name)
console.log(person.edad)
console.log(person.alias)
// Con notación de corchetes
console.log('\n', person['name'])

// Cómo modificamos los datos de un objeto
person.name = 'Daniel'
console.log('\n', person.name)

// Cómo eliminamos una propiedad del objeto
delete person.edad
console.log('\n', person)

// Cómo añadimos una propiedad
person.email = 'dani@gmail.com'
console.log('\n', person)

person['age'] = 35
console.log('\n', person)

// Añadir métodos (funciones) a los objetos
let person2 = {
    name: "Dani",
    edad: 37,
    alias: 'TrufoPlus',
    walk: function(){
        console.log('La persona está caminando.')
    }
}

person2.walk()

// Anidando objetos
let person3 = {
    name: "Dani",
    edad: 37,
    alias: 'TrufoPlus',
    walk: function(){
        console.log('La persona está caminando.')
    },
    job: {
        name: 'Electricista',
        exp: 9,
        work: function(){
            console.log('Está trabajando...')
        }
    }
}
console.log('\n', person3)
console.log('\n', person3.job)
console.log('\n', person3.job.name)
console.log('\n', person3.job.work())

// Igualdad de objetos

let person4 = {
    name: "Dani",
    edad: 37,
    alias: 'TrufoPlus'
}

console.log(person == person4) // false
console.log(person === person4) // false

console.log(person.alias == person4.alias) // true

// Cómo iteramos un objeto
for (let key in person4) {
    console.log(key)
} // Cuando iteramos sobre un objeto nos devolverá las claves

for (let key in person4) {
    console.log(key + ': ' + person4[key])
}  // De esta forma nos devuelve tanto la clave como su valor

// Interpolación (añadiendo this.clave podemos interpolar las propiedades del objeto)
let person5 = {
    name: "Dani",
    edad: 37,
    alias: 'TrufoPlus',
    walk: function(){
        console.log(`\n${this.name} está caminando.`)
    }
} // this hace referencia al objeto en el que nos encontramos
 
person5.walk()

// Usando funciones como objetos
function Person(name, age) { // Debería ser una clase
    this.name = name
    this.age = age
}

let person6 = new Person('Daniel', 35)
console.log('\n', person6)
console.log(person6.name)

console.log(typeof person5)
console.log(typeof person6)
