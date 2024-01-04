/* 
    O strict mode elimia alguns erros silenciosos
    que passariam batido do Javascript e os faz emitir erros.

    Além disso,e ssa forma corrige alguns erros que tornam o Javscript 
    difícilde ser otimizado, então algumas vezes o código no modo estrito
    rodam mais otimizados evelozes do que os códigos no 'modo normal'.

    link: https://www.geeksforgeeks.org/strict-mode-javascript/
*/
"use strict";

//var arguments;

(() => {
    let teste = "teste"
    console.log(teste)
})();