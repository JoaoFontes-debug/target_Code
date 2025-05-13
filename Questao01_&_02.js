
/**1) Observe o trecho de código abaixo: 
 * int INDICE = 13, SOMA = 0, K = 0;
 * Enquanto K < INDICE 
 * faça { K = K + 1; SOMA = SOMA + K; }
 * Imprimir(SOMA);
 * Ao final do processamento, qual será o valor da variável SOMA?
 **/

// Resposta: 91


/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor
 sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21,34...),
 escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência 
 de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
*/

const prompt = require('prompt-sync')();

let escalaFibonacci = prompt("digite o numero que deseja verificar se pertence a sequencia de Fibonacci: ");
   
function fibonacci(escalaFibonacci){
    let anterior = 1;
    let proximo = 0;
    let atual = 0;
    console.log("\tSequência de Fibonacci: \n");

    for(let i = 0; i<escalaFibonacci; i++){
       
       atual = anterior + proximo;
       console.log('\t',i+1,"° termo: ", atual)
       anterior = proximo;
       proximo = atual;

        if(atual == escalaFibonacci){
            console.log("\tO número ",escalaFibonacci," pertence a sequência de Fibonacci");
            break;
        }else if(atual > escalaFibonacci){
            console.log("\tO número ",escalaFibonacci," não pertence a sequência de Fibonacci");
            break;
        }
    }
}

fibonacci(escalaFibonacci);

