/*5. Crie uma função que receba um número e devolva uma soma progressiva. Por exemplo, recebendo o número 5, a função deve retornar 15, ou seja, o resultado de 1 + 2 + 3 + 4 + 5. 
*/
const pergunta = require("synchronous-user-input")
let numero = parseInt(pergunta("Digite um número para saber a sua progressão: "))
soma = 0

function progressao (num){
    for(let contador = 1; contador <= num ; contador ++){
    soma = soma + contador
    }
}
progressao(numero)
console.log(`O valor total da progressão do número ${numero} é de ${soma}`)
