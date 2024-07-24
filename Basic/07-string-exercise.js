// 1. Concatena dos cadenas de texto
let string1 = 'Mi nombre es'
let string2 = 'Daniel.'
let myNameIs = string1 + ' ' + string2
console.log(myNameIs)


// 2. Muestra la longitud de una cadena de texto
console.log('Longitus de la cadena: ', myNameIs.length)


// 3. Muestra el primer y último carácter de un string
console.log('Primer caracter: ', myNameIs[0])
console.log('Ultimo caracter: ', myNameIs[myNameIs.length-1])


// 4. Convierte a mayúsculas y minúsculas un string
console.log(string1.toLowerCase())
console.log(string2.toUpperCase())


// 5. Crea una cadena de texto en varias líneas
let message = ` Esta cadena de texto
estara escrita en varias lineas de
texto.`


// 6. Interpola el valor de una variable en un string
console.log(`Mi nombre es ${string2}`)


// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(myNameIs.replace(/ /g, '-'))


// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(myNameIs.includes('Daniel'))


// 9. Comprueba si dos strings son iguales
console.log(string1 == string2)
console.log(string1 == string1)


// 10. Comprueba si dos strings tienen la misma longitud
console.log(string1.length == string2.length)