//haciendo uso de esta secuencia S=[3,1,4,2,3] 
//min(S)
//complejidad 0(n)
let s = [3, 1, 4, 2, 3], min= s[0];


for (let i = 0; i < s.length; i++) {
    if (s[i] < min) {
        min = s[i]
    }
}

console.log(min);