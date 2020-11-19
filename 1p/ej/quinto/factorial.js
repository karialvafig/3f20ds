const n = 5;

function factorial(n = 5) {
    if (n == 1) {
        return 1;
    }
    return (n * factorial(n - 1));
}

console.log(factorial(n));