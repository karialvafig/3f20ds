//haciendo uso de esta secuencia S=[3,1,4,2,3] 
//avg(S)
//complejidad = n
let secuencia = [3, 1, 4, 2, 3], total=0;


for (let i = 0; i < secuencia.length; i++) {
    total += secuencia[i];
}

console.log(total / secuencia.length);