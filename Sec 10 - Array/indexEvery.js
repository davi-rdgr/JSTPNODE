const pedidos = [
    {
        id: 420,
        nome: "Davi",
        alimento: "suco",
    },
    {
        id: 421,
        nome: "Laís",
        alimento: "suquinho",
    },
    {
        id: 422,
        nome: "Jaí",
        alimento: "sucão",
    },
]

// retorna true se tiver só o que estou pesquisando
// retorna false se tiver algo mais do que estou pesquisando

const temRefri = pedidos.every( (elemento) => {
    return elemento.alimento === "sucão"
})

console.log(temRefri)