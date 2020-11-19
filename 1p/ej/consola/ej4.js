//primos
var cuantos;

let primosEncontrados = 0; 
let i = 0; 
process.stdout.write(`Ingresa cuántos números primos deseas generar: `);
process.stdin.on('data', function (data) {
    cuantos = data.toString().trim();
function primo(numero){
        for (var i = 2; i < numero; i++) {
    
            if (numero % i == 0) {
                return false;
            }
    
        }
    
        return numero !== 1;
    }
    
    while(primosEncontrados <= cuantos) {
        if(primo(i)) {
            console.log(i);
            primosEncontrados++;
        }
        i++;
    }
    process.exit();
});


