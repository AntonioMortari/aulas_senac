'use strict';

let btn = document.querySelector('#button');

const exibirResultado = (data) =>{
    let resposta = document.querySelector('#resposta');
        resposta.innerHTML = `
        <p>Rua: ${data.logradouro}</p>
        <p>Cidade: ${data.localidade}</p>
        <p>Estado: ${data.uf}</p>
    `
} 

const pegarResposta = () =>{
    let cep = document.querySelector('#cep').value
    let url = `https://viacep.com.br/ws/${cep}/json/`

    fetch(url)
        .then(response => response.json())
        .then(data => exibirResultado(data))
        .catch(error => console.log(error))
}

btn.addEventListener('click' , pegarResposta)

