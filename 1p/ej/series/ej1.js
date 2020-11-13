const x = 10;
let cont = 0;
let imparesEncontrados = 0;

while(flag <= x) {
    if(cont % 2 !== 0) {
        console.log(cont);
        imparesEncontrados++;
    }
    cont++;
}