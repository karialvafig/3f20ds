//haciendo uso de esta secuencia S=[3,1,4,2,3] 
//no leer datos, ie usar constantes n=5, r=2
//considerar dos números 3, elementos diferentes, por ejemplo cambiar a 31,32
//potencia(S)//powerSet
let S = [3,1,4,2,3]
    function potencia(x) {
        return x.reduce((k, y) => 
            k.concat(k.map(d => [y].concat(d))), [[]]);
    }
console.time();
potencia(S);
console.timeEnd();
console.log("Es una Complejidad Exponencial");
console.log(potencia(S));