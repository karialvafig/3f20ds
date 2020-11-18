
// Array de números impares

const x = 10; // número de impares a generar
const impares = []; // arreglo que guardará los números impares
let i = 0; // variable para iterar los números desde 1 hasta n
let cont = 0; // variable para contar los impares que llevamos
let imparesEncontrados=0;

while(imparesEncontrados <= x) {
    if(cont % 2 !== 0) {
        if(imparesEncontrados % 2 !== 0) {
            console.log(cont);
        } else {
            console.log(cont * -1);
        }
        imparesEncontrados++;
    }
    cont++;
}
