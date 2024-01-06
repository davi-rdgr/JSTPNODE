/* 

OBJETO: Tenis (propriedade) "cadarço", "palmilha"
OBJETO: Celular (pripriedade)
OBJETO: Drone (propriedade)

Pripriedades / Atributos / Funcionalidades

*/

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
    marca: ["Nike", "Adidas", "etc"],
    marcaObj: [
        {
            nome: "Nike",
        },
        {
            nome: "Adidas",
        },
        {
            nome: "Etc",
        },
    ],

    getmarca: function(param) {
        return this.marca[param].nome;
    },
    getmarcaObj: function(param) {
        return this.marcaObj[param].nome;
    },
};
/* console.log(Tenis) */
console.log(Tenis)
console.log(Tenis.tipo)
console.log(Tenis.tamanho)
console.log(Tenis.marca)
console.log(Tenis.marcaObj)