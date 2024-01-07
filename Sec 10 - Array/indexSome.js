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

const temAlimento = pedidos.some((element, index) => {
    return element.alimento === "sucão"
})

console.log(temAlimento)