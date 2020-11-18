//numeros aleatorios en array
let array = [];

function getRandomInt(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}

for (let i=1; i<=10; i++){
    array.push(getRandomInt(1,10));
}
console.log (array);