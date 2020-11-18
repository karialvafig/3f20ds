//factorial
//array
  
const x = 10;
let array=[];

for(let i = 1; i <= x; i++) {
    let factorial = 1;
    for(let j = i; j >= 1; j--) {
        factorial *= j;
    }
    array.push(`${i}! = ${factorial}`);
    console.log(array);
}