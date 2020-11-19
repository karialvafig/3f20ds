let dia = 1
let dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
let n = 11

console.log('En',n, 'días será', modular());

function modular(){
    let suma = n + dia - 1;
    let modulo = suma % 7;
    return dias[modulo];
}