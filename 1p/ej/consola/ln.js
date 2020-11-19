let logaritmo = 0, valor_i = 0;

process.stdout.write(`Ingresa x: `);
    process.stdin.on('data', function (data) {
        process.stdout.write(`Introduce el numero de interaciones: `);
        process.stdin.on('data', function (data) {
        numero = data.toString().trim();
        for(let k = 1; k <= n; k++){
            valor_i = (Math.pow(x, k)*Math.pow(-1,k+1))/k;
            logaritmo += valor_i;
            console.log(logaritmo);
            console.log('El valor de la iteración es: ',valor_i);
          }
           
        process.exit();

