//haciendo uso de esta secuencia S=[3,1,4,2,3] 
//existenRepetidos(S)
//complejidad: 0(n)
let s = [3, 1, 4, 2, 3], r=false;


const sf = s.filter(function(el, index) {
    return s.indexOf(el) === index;
})

if(sf.length !== s.length) {
    console.log('Hay repetidos')
} else {
    console.log('No hay repetidos')
}