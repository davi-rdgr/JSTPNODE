let Tenis = {
    tipo: "Tênis de corrida",
    cadarço: "G",
    estoque: false,
    tamanho: {
        palmilha: 38,
        tamanhoTenis: 40,
        caixa: {
            altura: 35,
            largura: 40,
            profundidade: 10,
        },
    },
};

// hasOwnProperty = usa para saber se existe algo dentro de um objeto, array, API 
// PropertyName in Tenis

console.log(Tenis.hasOwnProperty("tamanho"))

if ((Tenis.hasOwnProperty("tamanho"))) {
    console.log('tem tamanho')
} else {
    console.log('não tem tamanho')
}

console.log("tamanho" in Tenis)