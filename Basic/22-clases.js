////// Clases //////////
/*
Es un objeto complejo, para crear objetos.
Son plantilas para crear objetos
*/

// creamos la clase
class Person {

    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    } // nor permiote deficnir la estructura del objeto
}

// sintaxis creamos el obejeto a partir de la clase
let person = new Person('dani', 35, 'Trufo')
console.log(person)

let person2 = new Person('Brais', 37, 'Mouredev')
console.log(person2)



// Valores por defecto
class DefaultPerson {

    constructor(name = 'name', age = 0, alias = 'sin alias') {
        this.name = name
        this.age = age
        this.alias = alias
    } // constructor nos permite definir la estructura del objeto
}


let person3 = new DefaultPerson() //no le añadimos ningun valor
console.log(person3) // nos dara los valores por defecto que le pusimos




// Como accedemos a las propiedades
console.log(person3.alias)
console.log(person3['alias'])

person3.alias = 'Trufo' // asignamos un valor al alias
console.log(person3.alias)


// Funciones en clases
class Person2 {

    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    } 

    walk() {
        console.log(`${this.name} esta caminando`)
    }
}


let person4 = new Person2('dani', 35, 'Trufo')
person4.walk()


// Propiedades privadas
class PrivatePerson {

    #bank //defines el metodo que quieres privatizar

    constructor(name, age, alias, bank) {
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank // añade corchete para marcar como privada
    }

    Pay() {
        console.log('Pagando con tu cuenta del banco...')
    }
}

let person5 = new PrivatePerson('dani', 35, 'Trufo', 'IBAN123456789')
console.log(person5.bank) // dara undefined xq es privada, no puedes acceder




// getters y setters

class GetSetPerson {

    #name
    #alias
    #age
    #bank

    constructor(name, age, alias, bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    get bank() {
        return this.#bank
    } // con esta funcion nos permiete leer la propiedad banj

    set bank(newBank) {
        this.#bank = newBank
    } // nos permite modificar esa propiedad privada
}

let person6 = new GetSetPerson('dani', 35, 'Trufo', 'IBAN123456789')
console.log(person6.bank)

person6.bank = 'IBAN 123'
console.log(person6.bank)