//sen x = x - x^3/3! + ... -

function esImpar(numero){
    if(numero % 2 == 0) {
        return false;
      }
      else {
        return true;
      }
}
const x = 10;
let cont = 1;
let i = 1;
let sen = 3;

console.log(`sen ${sen}:`);

while(i <= x) {
    if(esImpar(cont)) {
        if(esImpar(i)) {
            console.log(`+ (${sen}^${cont} / ${cont}!)`);
        } else {
            console.log(`- (${sen}^${cont} / ${cont}!)`);
        }
        i++;
    }
    cont++;
}