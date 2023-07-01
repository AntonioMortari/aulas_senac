'use strict';

let btn = document.querySelector('#btn')

const mostrarResposta = (data) =>{
    let resposta = document.querySelector('#resposta')
    resposta.innerHTML = `
        <p><strong>Cidade:</strong> ${data.localidade}</p>
        <p><strong>Estado:</strong> ${data.uf}</p>
        <p><strong>Rua:</strong> ${data.logradouro}</p>
    `
}

const consultarCep = async () =>{
    let cep = document.querySelector('#cep').value
    let inputCep = document.querySelector('#cep')
    let url = `https://viacep.com.br/ws/${cep}/json/`
    if(cep.length != 8){
        alert('Erro, CEP inválido')
    }else{
        inputCep.value = ''
        try{
            const response = await fetch(url)
            const data = await response.json()
            if(data.erro){
                let resposta = document.querySelector('#resposta')
                resposta.innerHTML = `
                    <p>Erro, CEP não encontrado!</p>
                `
                return
            }else{
                mostrarResposta(data)
            }
        }catch(erro){
            console.log('Erro!' + erro)
        }
    }
}

btn.addEventListener('click' , consultarCep)