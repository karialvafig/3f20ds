function genFibo(n = 10) {
    let numArray = [];
    let a = 0;
    let b = 1;
    let c = a + b;
    numArray.push(a);
    numArray.push(b);
    numArray.push(c);
    for(let i = 0; i < n; i++) {
        a = b;
        b = c;
        c = a + b;
        numArray.push(c);
    }
    return numArray;
}

function getNumFibo(n = 5) {
    let arr = genFibo(n);
    return arr[n + 1];
}
const n = 5;

console.log(getNumFibo(n));