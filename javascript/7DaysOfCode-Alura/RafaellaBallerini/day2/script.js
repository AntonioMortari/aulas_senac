'use strict';

let nome = prompt('Olá, qual o seu nome?')
let idade = prompt('Quantos anos você tem?')
let linguagem = prompt('Qual linguagem de programação você está estudando?')
let simOuNão = Number(prompt(`Você está gostando de estudar ${linguagem}? Digite 1 para SIM e 2 para Não`))
if(simOuNão == 1){
    alert('Muito bom! Continue estudando e você terá muito sucesso.')
}else{
    alert('Ah, que pena! Você pode tentar outra linguagem, existem muitas para estudar e aprender :)')
}

let body = document.querySelector('body')
let text = document.createElement('span')
text.classList.add('text')
text.innerText = `Olá ${nome}, você tem ${idade} anos e está estudando ${linguagem}`
body.append(text)
