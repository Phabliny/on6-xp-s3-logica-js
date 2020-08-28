/*2. Agora faça o contrário, uma função que receba uma temperatura em Fahrenheit e chame uma função que converta para Celsius.*/

const pergunta = require('synchronous-user-input')
const temparaturaFahrenheit = parseFloat(pergunta("Digite uma temperatura que será convertida de °F para °C: "))
function conversor (temperatura_fahrenheit){
    return (temperatura_fahrenheit -32) / 1.8
}
console.log("A temperatura é de " + conversor(temparaturaFahrenheit).toFixed(1) + "° C")