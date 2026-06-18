let numeros = [170,93,-24,20,867,1]
let menor = 0
for (i = 0; i < numeros.length; i++){
    if (numeros[i] < menor) {
        menor = numeros[i]
    }
}
console.log("O maior numero é : "+ menor)