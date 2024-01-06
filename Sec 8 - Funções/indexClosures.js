/* 
Uma closure ocorre normalmente quando uma função
é declarada dentro do corpo de outra, e a função interior
referencia variáveis clocais da função exterior.
*/

/* function QualSeuNome(name) {
    const msg = `o seu nome é: `
    function yourName() {
        return `${msg} ${name}`
    }
    return yourName()
}

console.log(QualSeuNome("Davi Rodeghiero Souza")) */

function Calculadora(n1, n2) {
    const msg = "Resultado"
    const soma = () => {
        return `${msg} ${n1 + n2}`
    }

    const sub = () => {
        return `${msg} ${n1 - n2}`
    }

    const div = () => {
        return `${msg} ${n1 / n2}`
    }

    const multi = () => {
        return `${msg} ${n1 * n2}`
    }

    return {
        soma: soma(),
        subtração: sub(),
        divisão: div(),
        multiplicação: multi()
    }
}

console.log(Calculadora(10, 2))
