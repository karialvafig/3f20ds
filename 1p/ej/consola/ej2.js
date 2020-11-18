const x=2;
const maximo=10;


var numero;
    
    process.stdout.write(`Ingresa x: `);
    process.stdin.on('data', function (data) {
        numero = data.toString().trim();
        for(let y=1; y<= numero; y++){
            console.log(`${x}^${y} = ${Math.pow(x, y)}`);
        }
        process.exit();
    });