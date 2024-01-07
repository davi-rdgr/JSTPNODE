let arr = [
    { nome: "Exemplo", tel: "(99) 999999999999" },
    { nome: "Exemplo2", tel: "(99) 88888888888" },
    { nome: "Exemplo3", tel: "(99) 77777777777" },
    { nome: "Exemplo4", tel: "(99) 66666666666" },
    { nome: "Exemplo5", tel: "(99) 55555555555" },
    { nome: "Exemplo6", tel: "(99) 44444444444" },
]

console.table(arr)

// pega os dados de determinado objeto ou array de um numero até outro
const newArray = arr.slice(0, 3)

console.table(newArray)