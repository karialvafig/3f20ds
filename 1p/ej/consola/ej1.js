var numero;
    
    process.stdout.write(`Ingresa cuántos números aleatorios deseas generar: `);
    process.stdin.on('data', function (data) {
        numero = data.toString().trim();
        for (let i = 0; i < numero; i++) {
            console.log(`${i + 1} -> ${Math.floor(Math.random() * (10 - 1) + 1)}`);
        }
        process.exit();
    });

