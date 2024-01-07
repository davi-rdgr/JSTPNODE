const pedidos = [
    {
        id: 420,
        nome: "Davi",
        alimento: "Suco",
    },
    {
        id: 421,
        nome: "Laís",
        alimento: "Suquinho",
    },
    {
        id: 422,
        nome: "Jaí",
        alimento: "Sucão",
    },
]

// map é melhor em casos de procurar e fazer alterações nos elementos.

pedidos.map((element, index) => {
    console.log(index, element)
})

