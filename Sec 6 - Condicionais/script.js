const velocidade = 86;
const warn = 85;

const condicao =
    velocidade >= warn
        ? console.log('recebeu uma multa')
        : console.log('continue andando')