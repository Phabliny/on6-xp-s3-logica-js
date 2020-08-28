/*6. O Sr. Manoel Joaquim possui uma grande loja de artigos de R$ 1,99, com cerca de 10 caixas. Para agilizar o cálculo de quanto cada cliente deve pagar ele desenvolveu um tabela que contém o número de itens que o cliente comprou e ao lado o valor da conta. Desta forma a atendente do caixa precisa apenas contar quantos itens o cliente está levando e olhar na tabela de preços. Você foi contratado para desenvolver o programa que monta esta tabela de preços, que conterá os preços de 1 até 50 produtos, conforme o exemplo abaixo:
```
Lojas Quase Dois - Tabela de preços
1 - R$ 1.99
2 - R$ 3.98
...
50 - R$ 99.50 
``` */
// Aparecendo a tabela completa de 0 até 50
function tabela (){
    let contador = 1
while(contador <= 50){
    console.log(`${contador} - R$ ${(contador * 1.99).toFixed(2)}`)
    contador = contador + 1
}
}
console.log("-------------------------------------")
console.log(" Lojas Quase Dois - Tabela de preços")
console.log("-------------------------------------")
tabela()
console.log("-------------------------------------")
//De modo que o vendedor coloca a quantidade de itens que vai ser comprada: 
/* const pergunta = require("synchronous-user-input")
let numeroDeArtigos = parseInt(pergunta("Quantos produtos o cliente vai comprar? "))

function tabelaDePrecos (valor){
    return (valor * 1.99)
    console.log()
}
console.log(`O valor total desta compra é de R$${(tabelaDePrecos(numeroDeArtigos).toFixed(2))}`)*/