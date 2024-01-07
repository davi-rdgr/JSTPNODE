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

//Filter pega todos que tem o valor necessitado, Find apenas o primeiro encontrado
const findID = pedidos.find((element, index) => {
    return element.id == 420;
})

console.log(findID)