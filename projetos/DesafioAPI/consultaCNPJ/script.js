'use strict';

let btn = document.querySelector('#btn')
let inputCNPJ = document.querySelector('#cnpj')
let resposta = document.querySelector('#resposta')


const mostrarResposta = (dados) =>{
    if(dados.cnpj == undefined){
        resposta.innerHTML = 'CNPJ não encontrado'
        return
    }else{
        resposta.classList.add('active')
        resposta.innerHTML = `
            <p><span>Razão Social:</span> ${dados.razao_social}</p>
            <p><span>Natureza Jurídica:</span> ${dados.natureza_juridica}</p>
            <p><span>CNPJ:</span> ${dados.cnpj}</p>
            <p><span>Porte:</span> ${dados.porte}</p>
        `
    }
}

const pegarResposta = async () =>{
    let cnpj = inputCNPJ.value
    let url = `https://brasilapi.com.br/api/cnpj/v1/${cnpj}`

    if(cnpj.split('').length != 14){
        alert('ERRO, CNPJ inválido!')
        return
    }

    try{
        let resposta = await fetch(url)
        let dados = await resposta.json()
        if(dados.type == 'bad_request'){
            console.log('ERRO, CNPJ não encontrado!')
        }
        mostrarResposta(dados)
    } catch(erro){
        resposta.innerHTML = 'Ocorreu um erro inesperado, verifique os dados e tente novamente!'
        console.log(erro)
    } 
}

btn.addEventListener('click', pegarResposta)