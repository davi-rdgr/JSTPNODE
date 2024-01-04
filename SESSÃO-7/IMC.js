const peso = 80
const altura = 1.98

const imc = peso / (altura * altura)

console.log(imc.toFixed(2))

switch (true) {
    case imc < 17:
        console.log('muito abaixo do peso')
        break;
    case imc >= 17 && imc <= 18.49:
        console.log('abaixo do peso')
        break;
    case imc >= 18.5 && imc <= 24.99:
        console.log('peso normal')
        break;
    case imc >= 25 && imc <= 29.99:
        console.log('acima do peso')
        break;
    case imc >= 30 && imc <= 34.99:
        console.log('Obesidade I')
        break;
    case imc >= 35:
        console.log('Obesidade II')
        break;
}

