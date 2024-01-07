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
const filterRefri = pedidos.filter((element, index) => {
    return element.alimento === "Suquinho".toLowerCase()
})
console.log(filterRefri)