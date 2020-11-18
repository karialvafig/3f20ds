//lucas
//versión inicial del vector de Lucas
lucas=[1,3];
//una constante para definir un límite
var limite=9;

//lamada a la recursión para calcular el indice 2 del vector de lucas
secLucas(2);

//mostramos el resultadp
console.log ("La secuencia de lucas es: "+lucas);
//1, 3, 4, 7, 11, 18, 29, 47, ...


function secLucas(n){ //calcular el término n
        if (n<=limite) { //solo si no es menor que el limite
                lucas[n]=lucas[n-1]+lucas[n-2];
                secLucas(n+1);
        }
}