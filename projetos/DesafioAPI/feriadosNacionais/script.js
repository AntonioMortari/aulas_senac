'use strict';

let btn = document.querySelector('#btn')
let inputAno = document.querySelector('#data')
let conteinerFeriados = document.querySelector('#resposta')
let removerTudo = document.querySelector('#trash')

const mostrarResposta = (dados) =>{
    let resposta = document.querySelector('#resposta')
    resposta.innerHTML = ''
    dados.forEach((feriado,index) =>{
        let data = feriado.date.split('-').reverse().join('-')
        resposta.innerHTML +=`
            <div class="feriados">
                ${data} -${feriado.name}
                <i class="bi bi-x-circle"></i>
            </div>
        `
    })
} 

const consultarFeriados = async () =>{
    let ano = inputAno.value
    let url = `https://brasilapi.com.br/api/feriados/v1/${ano}`  

    if(ano.split('').length <4){
        alert('Data inválida')
        return
    }
    if(ano > 2199 || ano < 1900){
        let resposta = document.querySelector('#resposta')
        resposta.innerHTML = `Data fora do intervalo suportado!`
        return
    }

    try{
        let resposta = await fetch(url)
        let dados = await resposta.json()
        mostrarResposta(dados)

    }catch (erro){
        let resposta = document.querySelector('#resposta')
        resposta.innerHTML = `Ocorreu um erro inersperado. Verifique os dados e tente novamente!`
        console.log(erro)
    }

}

const removerFeriado = (evento) =>{
    let feriadoRemovido = evento.target
    feriadoRemovido.parentNode.remove()
}

btn.addEventListener('click' , consultarFeriados)

conteinerFeriados.addEventListener('click' , (evento) =>{
    if(evento.target.classList.contains('bi-x-circle')){
        removerFeriado(evento)
    }
})

trash.addEventListener('click' , () =>{
    if(confirm('Deseja remover todos os feriados?')){
        let resposta = document.querySelector('#resposta')
        resposta.innerHTML = ''
    }
})