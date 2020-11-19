let dia = 1;
let dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];


console.log('En 11 días será', modular());

function modular(){
    let suma = 11 + dia - 1;
    let modulo = suma % 7;
    return dias[modulo];
}