/**
 * Escreva um programa que inverta os caracteres de um string.
 * IMPORTANTE:
 * 
 * a) Essa string pode ser informada através de qualquer entrada de sua 
 * preferência ou pode ser previamente definida no código;
 * 
 * b) Evite usar funções prontas, como, por exemplo, reverse;
 */


const prompt = require('prompt-sync')(); 

function inverteString(str) {
    let reversed = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}


const inputString = prompt('Digite uma palavra ser invertida: ');
console.log(`Palavra invertida: ${inverteString(inputString)}`);