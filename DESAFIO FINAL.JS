let produtos = ["Folhado", "Salgado", "Bolo de pote", "Palha italiana", "refrigerante"]
for (i = 0; i < produtos.length; i++){
    console.log(produtos[i])
}
produtos.push("Pirulito")
produtos.shift()
produtos[3] = "água"
console.log(produtos)
console.log(produtos.length)

for (g = 0; g < produtos.length; g++){
    if (produtos[g] == "coxinha"){
        console.log ("produto encontrado")
    }else if (g !== 'Bolo de pote' && g == produtos.length){
        console.log ("produto não encontrado")
    }
}