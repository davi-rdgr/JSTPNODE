// passando valores para o Objeto através de parâmetro 


/* const Tenis = (tamanho, estoque, preco) => {
    return {
        tamanho: tamanho,
        estoque: estoque,
        preco: preco,
    }
}

console.log(Tenis(45, true, 200)) */



/* const tenis2 = (tamanho, estoque, preco) => ({
        tamanho,
        estoque,
        preco,
})

console.log(tenis2(20, true, 200)) */

const tenis4 = {
    getTamanho: function() {
        return 35
    }
}

console.log(tenis4.getTamanho())