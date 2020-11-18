//sen x = x - x^3/3! + ... -
//array
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
array = [];

console.log(`sen ${sen}:`);

while(i <= x) {
    if(esImpar(cont)) {
        if(esImpar(i)) {
            array.push(`+ (${sen}^${cont} / ${cont}!)`);
            console.log(array);
        } else {
            array.push(`- (${sen}^${cont} / ${cont}!)`);
            console.log(array)
        }
        i++;
    }
    cont++;
}