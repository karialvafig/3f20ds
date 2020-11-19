//haciendo uso de esta secuencia S=[3,1,4,2,3] 
//no leer datos, ie usar constantes n=5, r=2
//considerar dos números 3, elementos diferentes, por ejemplo cambiar a 31,32
//permutaciones (S)
const S = [3,1,4,2,3];

var permArr = [], usedChars = [];
 
function permute(input) 
{ 
    var i, ch; 
    for (i = 0; i < input.length; i++) 
    { 
        ch = input.splice(i, 1)[0];
        usedChars.push(ch); 
        if (input.length == 0) 
        { 
            permArr.push(usedChars.slice()); 
        } 
        permute(input); 
        input.splice(i, 0, ch); 
        usedChars.pop(); 
    } 
        return permArr 
}

console.log(permute(S));