// cuantas(4), no leer datos, ie usar constantes r = 3
// De un alfabeto de 8 símbolos cuantas palabras de 8 símbolos podemos generar ?
let r = 8, 
    n = 8, 
    cantidad = 0;

if(cantidad = calcularfactorial(n)/calcularfactorial(n-r)){
    cantidad = calcularfactorial(n)/calcularfactorial(n-r)
    console.log(cantidad);
    
    function calcularfactorial(n){
        let factorial = 1
        for(let i = 1; i <= n; i++){
              factorial = i * factorial;
        }
        return factorial;
    }
}
else{
    console.log('No se puede');
}
