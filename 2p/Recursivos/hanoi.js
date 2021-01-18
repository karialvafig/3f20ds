var tower1 = [], tower2 = [], tower3 = [];
var n = 5; // Numero de discos

// Coloca en orden n discos en tower1
initTowers();
show(); // Estado inicial de las torres
hanoi(n, tower1, tower2, tower3);
show(); // Estado final de las torres

function hanoi(n, ori, aux, des) {
 // El caso base es mover 1 disco de ori a des
 if(n === 1) 
  mov(ori, des);
 else {
  // Se mueven n-1 discos de ori a aux
  hanoi(n - 1, ori, des, aux);
  mov(ori, des);
  // Se mueven n-1 discos de aux a des
  hanoi(n - 1, aux, ori, des);
 }
}
// Se mueve un disco de la torre ori a des
function mov(ori, des) { 
 des.push(ori.pop()); 
}
function initTowers() {
 for(var i = 0; i < n; i++) 
  tower1.push(n - i);
}
function show() {
 console.log(tower1);
 console.log(tower2);
 console.log(tower3);
 console.log();
}