//haciendo uso de esta secuencia S=[3,1,4,2,3] 
//max(S)
//complejidad 0(n)
let s = [3, 1, 4, 2, 3], max = s[0];

function Max(){
    for(i = 0; i < s.length; i++){
        if(max < s[i]){
            max = s[i];
        }
        else{
          continue;
        }
        
    }
    return max;
}
console.log(max);