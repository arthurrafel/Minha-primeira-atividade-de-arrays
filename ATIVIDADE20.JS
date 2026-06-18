let num = [2,15,4,55,6,76,8,29,10]
let par = 0
for (i = 0; i < num.length; i++){
    if (num[i] % 2 === 0){
        par = par + 1
    }
}
console.log ("Há "+ par + " numeros pares")