/* 

O que é uma função?

1 - Function declarations 
2 - Function expression
3 - Arrow Functions

*/
//Function declarations:

function isValid() {

    const soma = 1 + 2;
    if (soma === 3) {
        return true;
    }
    return false;
}
console.log(isValid())

//Function expression:

const isValidExpression = function () {
    return false;
}
console.log(isValidExpression())

//Arrow Functions:

const isValidArrow = () => 2 * 2
//ou
const isValidArrow2 = () => {
    const multi = 2 * 2
    return multi
}

console.log(isValidArrow())
console.log(isValidArrow2())