'use strict'

let inputExpressao = document.querySelector('#expressao')
let btnC = document.querySelector('#c')
let btnApagarValor = document.querySelector('#apagar-valor')
let btnIgual = document.querySelector('#resultado')
let operadores = document.querySelectorAll('.operador')
let arrayOperadores = ['-', '+', '/', '*']


const mostrarValorDigitado = (num) =>{  
    inputExpressao.value += num
}

const limparInput = () =>{
    inputExpressao.value = ''
}

const apagarValor = () =>{
    if(inputExpressao.value.length == 0){
        return
    }
    inputExpressao.value = inputExpressao.value.slice(0, inputExpressao.value.length -1)
}

const mostrarResultado = () =>{
    operadores.forEach((operador) =>{
        if(inputExpressao.value.charAt(inputExpressao.value.length - 1) == operador.textContent){
            alert('ERRO, expressão inválida')
            return
        }
        
    })
    let resultado = Number(eval(inputExpressao.value))
    inputExpressao.value = resultado.toLocaleString('pt-BR')
}

btnIgual.addEventListener ('click', mostrarResultado)
btnApagarValor.addEventListener('click' , apagarValor)
btnC.addEventListener('click',limparInput)
document.querySelectorAll('.valor').forEach((valor) =>{
    valor.addEventListener('click', () =>{
        let num = valor.textContent
        mostrarValorDigitado(num)
    })
})