myArray = [1, 2, 3, 4]

let person = {
    name: "Dani",
    age: 37,
    alias: 'TrufoPlus',
}

let myValue = myArray[1]
console.log(myValue)

let myName = person.name
console.log(myName)

////////// Desestructuracion ////////////

/*
nos permite extraer valores de arrays y objetos y asignarlos a un arrays

*/

// Sintaxis en arrays
let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray
console.log(myValue0) // nos dara el primer valor del array
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4) // nos da undefined porque no hay valor en esas ultima posicion

//Sintaxis de rrays con valores predeterminados
let [myValue5, myValue6, myValue7, myValue8 = 0, myValue9 = 9] = myArray
console.log(myValue5) // nos dara el primer valor del array
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9) 



// Ignorar elementos del array
let [myValue10, , , myValue13] = myArray
console.log('\n',myValue10)
console.log(myValue13) 


console.log() 


// sintaxis de objects
let { name, age, alias } = person
console.log(name) // Dani
console.log(age) // 35
console.log(alias) // TrufoPlus



// Sintaxis objects con valores predeterminados
let { name2, age2, alias2, email = 'dani@gmail.com' } = person
console.log(name2) // no existe
console.log(age2) // no existe
console.log(alias2) // no existe
console.log(email) 



// Sintaxis objects con nuevos nombres de variables
let { name: name3, age: age3, alias: alias3 } = person
console.log(name3) // Dani
console.log(age3) // 35
console.log(alias3) // TrufoPlus



// destruccutracion con objetos anidados
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

let {name: name4, job: {name: jobName}} = person3
console.log(name4)
console.log(jobName)




// Propagacion (spreading) (...)
// sintaxis array
let myArray2 = [...myArray] //hace una copia del array 
console.log(myArray2)

let myArray3 = [...myArray, 5, 6] // añadimos mas elementos a la copia
console.log(myArray3)



// Combinacioin de arrays
let myArray4 = [...myArray2, ...myArray3]
console.log(myArray4) 



// Sintaxis objects
let person4 = {...person, email: 'dani@gmail.com'}
console.log(person4)

