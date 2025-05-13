/**
 * Dado um vetor que guarda o valor de faturamento diário de uma distribuidora,
 * faça um programa, na linguagem que desejar, que calcule e retorne:• 
 * 
 * O menor valor de faturamento ocorrido em um dia do mês;• 
 * O maior valor de faturamento ocorrido em um dia do mês;• 
 * Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
 * 
 * IMPORTANTE:
 * a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
 * b) Podem existir dias sem faturamento, como nos finais de semana e feriados.
 * 
 * Estes dias devem ser ignorados no cálculo da média;
 */

const fs = require('fs');

try {
    const dados = JSON.parse(fs.readFileSync('./dados.json', 'utf-8'));
    const valores = [];

   
    for (const dia of dados) {
        if (dia.valor > 0) {
            valores.push(dia.valor);
        }
    }

    if (valores.length === 0) {
        console.log('Não há dados válidos para cálculo.');
        return;
    }

   
    let menorFaturamento = valores[0];
    let maiorFaturamento = valores[0];
    for (let i = 1; i < valores.length; i++) { 
        if (valores[i] < menorFaturamento) {
            menorFaturamento = valores[i];
        }
        if (valores[i] > maiorFaturamento) {
            maiorFaturamento = valores[i];
        }
    }

    
    let somaFaturamento = 0;
    for (const valor of valores) {
        somaFaturamento += valor;
    }
    const mediaMensal = somaFaturamento / valores.length;

   
    let diasAcimaDaMedia = 0;
    for (const valor of valores) {
        if (valor > mediaMensal) {
            diasAcimaDaMedia++;
        }
    }

  
    console.log(`Menor faturamento diário: ${menorFaturamento}`);
    console.log(`Maior faturamento diário: ${maiorFaturamento}`);
    console.log(`Dias com faturamento acima da média: ${diasAcimaDaMedia}`);
} catch (erro) {
    console.error('Erro ao processar o arquivo:', erro.message);
}