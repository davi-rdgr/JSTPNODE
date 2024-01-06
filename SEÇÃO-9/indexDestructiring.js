// outro jeito de chamar os valores do objeto

const Tenis = {
    tamanho: 45,
    estoque: true,
    marcas: [{ nome: "Nike" }, { nome: "Adidas" }],
    secret: 1987231,
    link: { a: "a", b: { c: "c" } },
};

/* const { tamanho = "Sem informações de tamanho", estoque = "Não está em estoque", marcas = "Não possui marca" } = Tenis;
console.log(tamanho, estoque, marcas)
const { secret: randomNumber } = Tenis;
console.log(randomNumber) */

const { link } = Tenis


console.log(link)