let numeros = [1,4,230,59,45,81]
let maior = 0
for (i = 0; i < numeros.length; i++){
    if (numeros[i] > maior) {
        maior = numeros[i]
    }
}
console.log("O maior numero é : "+ maior)