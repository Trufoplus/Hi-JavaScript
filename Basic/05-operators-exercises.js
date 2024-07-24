// 1. Crea una variable para cada operación aritmética
let sum = 3+3
let subtract = 3-3
let division = 3/3
let multiply = 3*3
let modul = 3%3
let exponent = 3**3


// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
sum += 1
subtract -= 1
division /= 1
multiply *= 1
modul %= 0
exponent **= 2


// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación
console.log(sum == sum)
console.log(sum > subtract)
console.log(sum >= subtract)
console.log(sum != subtract)
console.log(sum === sum)


// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(sum == subtract)
console.log(sum < subtract)
console.log(sum <= subtract)
console.log(sum != sum)
console.log(subtract > sum)


// 5. Utiliza el operador lógico and
console.log(sum == sum && sum > subtract)


// 6. Utiliza el operador lógico or
console.log(sum == sum || sum == subtract)


// 7. Combina ambos operadores lógicos
console.log(sum == sum || sum == subtract && sum != sum)


// 8. Añade alguna negación
console.log(!(sum == sum))


// 9. Utiliza el operador ternario
const ImStuding = false
ImStuding ? console.log('Estoy Estudiando') : console.log('No estoy estudiando')


// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log(sum == sum || (sum == subtract && sum != sum))