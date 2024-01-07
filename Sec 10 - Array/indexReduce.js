const pedidos = [
    {
        id: 420,
        nome: "Davi",
        alimento: "suco",
        preco: 21,
    },
    {
        id: 421,
        nome: "Laís",
        alimento: "suquinho",
        preco: 212
    },
    {
        id: 422,
        nome: "Jaí",
        alimento: "sucão",
        preco: 191
    },
]

// serve para juntar todos valores pedidos e somar MTO ÚTIL PQP

const temReduce = pedidos.reduce((total, element) => {
    return total + element.preco
}, 0)

console.log(temReduce)