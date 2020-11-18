// Serie de Lucas
const x = 10;
const serie = [2, 1];

console.log(serie[0]);
console.log(serie[1]);

for(let i = 1; i <= x - 2; i++) {
    const el = serie[i] + serie[i - 1];
    console.log(el);
    serie[i + 1] = serie[i] + serie[i - 1];
}