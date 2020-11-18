
// Array de números impares

const x = 10; // número de impares a generar
const impares = []; // arreglo que guardará los números impares
let i = 0; // variable para iterar los números desde 1 hasta n
let cont = 0; // variable para contar los impares que llevamos

while(cont < x) { // mientras que i sea menor que x
    if (i % 2 !== 0) { // si el residuo de dividirlo es diferente de 0 es IMPAR
        impares[cont] = i; // se añade ese valor al arreglo de impares (en el arreglo dentro de la posición contador, ya que esa es la que va de 1 en 1, se añade el número actual)
        cont++; // se aumenta el contador en 1 (porque encontramos un número impar)
    }
    i++; // se aumenta el iterador en 1
}

console.log(impares);