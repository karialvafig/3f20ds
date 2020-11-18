
var maximo;

    process.stdout.write(`Ingresa el numero máximo: `);
    process.stdin.on('data', function (data) {
        maximo = data.toString().trim();
        for(let i = 1; i <= maximo; i++) {
            let factorial = 1;
            for(let j = i; j >= 1; j--) {
                factorial *= j;
            }
            console.log(`${i}! = ${factorial}`);
    
        }
        process.exit();
    });