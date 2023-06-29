'use strict'

let btn = document.querySelector('#btn')

const mostrarResposta = (objeto) =>{
    let resposta = document.querySelector('#resposta')

    resposta.innerHTML = `
        <p>Rua: ${objeto.logradouro}</p>
        <p>Bairro: ${objeto.bairro}</p>
        <p>Cidade: ${objeto.localidade}</p>
        <p>Estado: ${objeto.uf}</p>
    `
}

const pegarResposta = () =>{
    let cep = document.querySelector('#cep').value
    let url = `https://viacep.com.br/ws/${cep}/json/`

    if(cep.length != 8){
        alert('Erro, CEP Inválido')
        return
    }

    fetch(url)
        .then((resposta) =>{
            resposta.json().then((respostaJson) =>{
                mostrarResposta(respostaJson)
            })
        })

        .catch(() =>{
            let resposta = document.querySelector('#resposta')
            resposta.innerHTML = `
                <p>Erro, CEP não encontrado!</p>
            `
        })
} 


btn.addEventListener('click' , pegarResposta)