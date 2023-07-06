'use strict';
//pegar elementos
let body = document.querySelector('body')
let alterarModo = document.querySelector('#btn-alternar-modo')
let btnCalcular = document.querySelector('#btn-calcular')
let resposta = document.querySelector('#resposta')
let gorjetaParaCada = 0
let gorjetaTotal = 0

//funções
const darkLightMode = () =>{
    body.classList.toggle('active')
    alterarModo.classList.toggle('light')

    if(alterarModo.classList.contains('light')){
        alterarModo.textContent = 'light_mode'
    }else{
        alterarModo.textContent = 'dark_mode'
    }
}

const mostrarResposta = () =>{
    if(gorjetaParaCada == NaN || gorjetaTotal == 0){
        alert('Preencha os dados corretamente!')
        return
    }
    gorjetaTotal = gorjetaTotal.toLocaleString('pt-br', {style:'currency', currency: 'BRL'})
    gorjetaParaCada = gorjetaParaCada.toLocaleString('pt-br', {style:'currency' , currency: 'BRL'})
    resposta.innerHTML = `
        <p>Gorjeta Total: <strong>${gorjetaTotal}</strong></p>
        <p>Gorjeta total para cada: <strong>${gorjetaParaCada}</strong></p>
    `
}

const calcularGorjeta = () =>{
    let inputs = document.querySelectorAll('.input')
    let valorConta = document.querySelector('#conta').value
    let pessoasDividir = document.querySelector('#pessoas').value
    let qualidadeServico = document.querySelector('#qualidade-servico').value

    gorjetaParaCada = (qualidadeServico * valorConta) / pessoasDividir
    gorjetaTotal = qualidadeServico * valorConta

    inputs.forEach(input =>{
        input.value = ''
    })

    mostrarResposta()
}


//eventos
alterarModo.addEventListener('click', darkLightMode)
btnCalcular.addEventListener('click', (event) =>{
    event.preventDefault()
    calcularGorjeta()
})