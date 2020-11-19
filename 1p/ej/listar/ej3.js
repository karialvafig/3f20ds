//haciendo uso de esta secuencia S=[3,1,4,2,3] 
//no leer datos, ie usar constantes n=5, r=2
//considerar dos números 3, elementos diferentes, por ejemplo cambiar a 31,32
//combinaciones(S)
let S = [3,1,4,2,3]
function combinaciones (S) {
   let r = [];
    let comb2 = (a, n = []) => {
        if (a.length === 0) {
            r.push(n)
        }
         else {
            for (let i = 0; i < a.length; i++) {
                let curr = a.slice();
                let nx = curr.splice(i, 1);
                comb2(curr, n.concat(nx))
            }
        }
    }
    comb2(S)
    return r;
}
console.time();
combinaciones(S);
console.timeEnd();
console.log("Es una Complejidad Exponencial");
console.log(combinaciones(S));