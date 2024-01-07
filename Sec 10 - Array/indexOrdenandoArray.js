const Arrays = ["A", "B", "O", "L", "Ç", "I"];

// ordenando em ordem alfabética 

console.log(Arrays.sort())

//de tras pra frente

console.log(Arrays.reverse())

const ArraysN = [10, 20, 30, 4000, 12, 99, 1]

//para organizar números

console.log(ArraysN.sort((a, b) => a - b))

// de trás pra frente

console.log(ArraysN.sort((a, b) => b - a))
console.log(ArraysN.sort((a, b) => b - a).reverse())

