/*3. Faça um programa que receba um valor em metros e e chame uma função que converta em milímetros.*/
const pergunta = require('synchronous-user-input')
const valorMetros = parseFloat(pergunta("Digite um valor para ser convertido de metros para milímetros: "))
function conversor (valor_metros){
    return (valor_metros * 1000)
}
console.log(`O valor em milímetros é de ${conversor(valorMetros).toFixed(1)}`)