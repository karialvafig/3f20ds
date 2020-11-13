const x = 10;
let cont = 0;
let imparesEncontrados = 0;

while(imparesEncontrados <= x) {
    if(cont % 2 !== 0) {
        if(imparesEncontrados % 2 !== 0) {
            console.log(cont);
        } else {
            console.log(cont * -1);
        }
        imparesEncontrados++;
    }
    cont++;
}