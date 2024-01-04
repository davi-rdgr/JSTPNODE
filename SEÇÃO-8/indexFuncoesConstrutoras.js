/* function Name(name, sobrenome) {
    this.name = name;
    this.sobreNome = () => {
        const nomeCompleto = `${this.name} ${sobrenome}`;
        return nomeCompleto;
    }
}

const davi = new Name("Davi", "Rodeghiero");
const lais = new Name("Laís", "Goulart");
console.log(davi)
console.log(davi.sobreNome())
console.log(lais)
 */


// Definindo a função construtora Calculadora
function Calculadora1(num1, num2) {
    // Adicionando um método 'soma' ao objeto criado
    this.soma = () => {
        return `${num1 + num2}`;
    };
    // Adicionando um método 'subtracao' ao objeto criado
    this.subtracao = () => {
        return `${num1 - num2}`;
    }
}
// Criando uma instância da Calculadora com os valores 1 e 2
const calculadora1 = new Calculadora1(1, 2);
// Chamando o método 'soma' da instância e imprimindo o resultado no console
console.log(calculadora1.soma());
console.log(calculadora1.subtracao());

// OU PASSANDO OS PARAM DIRETO NA CHAMADA

// Definindo a função construtora Calculadora
function Calculadora() {
    // Adicionando um método 'soma' ao objeto criado
    this.soma = (num1, num2) => {
        return `${num1 + num2}`;
    };
    // Adicionando um método 'subtracao' ao objeto criado
    this.subtracao = (num1, num2) => {
        return `${num1 - num2}`;
    }
}
// Criando uma instância da Calculadora com os valores 1 e 2
const calculadora = new Calculadora();
// Chamando o método 'soma' da instância e imprimindo o resultado no console
console.log(calculadora.soma(1, 2));
console.log(calculadora.subtracao(1, 2));


// MULTIPLICANDO:


function Multiplicar() {
    this.multiplicar = (num1, num2) => {
        return `${num1 * num2}`
    }
}

const CalcMultiplicadora = new Multiplicar()

console.log('resultado: ' + CalcMultiplicadora.multiplicar(3, 4))

// DIVIDINDO

function Dividindo() {
    this.dividindo = (n1, n2) => {
        return `${n1 / n2}`
    }
}

const calcDivisora = new Dividindo()
console.log("a divisão deu: " + calcDivisora.dividindo(10, 2))