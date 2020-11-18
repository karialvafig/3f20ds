const x=2;
const maximo=10;
let array=[];

for(let y=1; y<= maximo; y++){
    array.push(`${x}^${y} = ${Math.pow(x, y)}`);
}
console.log(array)