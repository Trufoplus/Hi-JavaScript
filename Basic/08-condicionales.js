// CONDICIONALES

/*
Nos devolvera si una condicion en verdadera o falsa, y en funcion deñ
resultado se ejecutara un codigo o no.

Se puede agrupar en tres bloques: if, else if, else
*/

// if (si)

let age = 17


if (age == 37) {
    // Bloque de codigo (el codigo aqui se ejecuta si el condicional es true)
    console.log("La edad es 37")
}


// else (si no)

else {
    // (el codigo aqui se ejecuta si el condicional if no se cumple)
    console.log("La edad no es 37")
}


// else if (si no, si)

if (age == 37) {
    // Bloque de codigo (el codigo aqui se ejecuta si el condicional es true)
    console.log("La edad es 37")
} else if (age < 18) {
    // Se ejecuta si no se cumple la condicion if (similar a elif de pithon)
    console.log('Es menor de edad')
}
else {
    // (el codigo aqui se ejecuta si el condicional if no se cumple)
    console.log("La edad no es 37 ni es menor de edad")
}




// Operadores ternario
// ? es un if y los : es un else
// si la condicion se cumple ejecuta lo que hay despues de ? si no se 
// cumple ejecuta lo que hay despues de los dos puntos (:)

const message = age == 37 ? 'La edad es 37' : 'La edad no es 37' 
// el operador ternario esta guardado en una constante y la imprimimos por consola
// o podemos trabajar con ella
console.log(message)




// switch
/*
Switch es una alternativa al 'else if'
*/
let day = 3
let dayName

switch (day) {
    case 0:  // comprueba si day es = a 0
        dayName = 'Lunes'
        break // se sale del bloque si se cumple la condicion si no te devolvera la ultima 'Domingo'
    case 1: 
        dayName = 'Martes'
        break        
    case 2: 
        dayName = 'Miercoles'
        break
    case 3: 
        dayName = 'Jueves'
        break  
    case 4: 
        dayName = 'Viernes'
        break
    case 5: 
        dayName = 'Sabado' 
        break 
    case 6: 
        dayName = 'Domingo'
        break
    default: // es un igual a un 'else' se ejecuta si el resto de condiciones no se cumplen
        dayName = 'Numero de dia incorrecto'
        // no es necesario aqui un 'break' porque no hay mas nada despues de esta condicion.
}

console.log('Hoy es',dayName)

/*
El switch es muy legible, por otro lado es muy eficiente se ejecuta mucho mas rapido,
pero es menos flexible si queremos hacer operaciones mas complejas.
Ademas tenemos que meter el break o nos dara un error por lo que no nos podemos olvidar de el
*/