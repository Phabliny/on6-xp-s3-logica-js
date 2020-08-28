/*# Exercícios da Semana
> Você pode dar os nomes que quiser para as funções e variáveis, apenas lembre que eles devem ser semânticos :)

1. Crie uma função que receba uma temperatura em Celsius e chame uma função que converta para Fahrenheit. F = 9*C/5 + 32
*/
const pergunta = require('synchronous-user-input')
const temperaturaCelcius = parseFloat(pergunta("Digite a temperatura que será convertida de °C para °F: "))
function conversor (temperatura_celcius){
    return (temperatura_celcius * 1.8) + 32
}
console.log("A temperatura é de " + conversor(temperaturaCelcius).toFixed(1) + "° F")