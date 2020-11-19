let dia = 1, dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

console.log('Hace 11 días fué', modular());

function modular(){
    let resta = 11 % 7;
    if(resta >= dia){
        let suma= 7 + dia - resta -1;
        return dias[suma];       
    }
    let suma = dia - resta - 1;
    return dias[suma];
}