
function fibonacci(numero)
{
    let numeros=[1,1];
    for (let i = 2; i < numero; i++) {
        numeros[i] = numeros[i - 2] + numeros[i - 1];
    }
    return numeros;
}

// Ejecutamos la función pasándole como parámetro el numero 
console.log(fibonacci(10)); // 0,1,1,2,3,5,8,13,21,34
        
        

        
    


