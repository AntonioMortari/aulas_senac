'use strict'
import { options } from "./key.js"
import { URLS, funcoes } from "./funcoes.js"

//ELEMENTOS E VARIÁVEIS
let conteinerFilmes = document.querySelector('#conteiner-filmes')
let inputPesquisa = document.querySelector('#input-pesquisa')
let itensLocalStorage = JSON.parse(localStorage.getItem('itens')) || []


//FUNÇÕES
const requisicaoPadrao = async() =>{
    conteinerFilmes.innerHTML = ''
    try{
        let resposta = await fetch(URLS.urlMaisVotados, options)
        let dados = await resposta.json()
        let dadosFilme = dados.results
        funcoes.criarFilmes(dadosFilme)
    }catch(e){
        console.log(e)
    }
}

const procurarFilme = async() =>{
    if(inputPesquisa.value.lenght == 0){
        alert('Digite os dados corretamente')
        return
    }
    let itemPesquisado = inputPesquisa.value

        let resposta = await fetch(`https://api.themoviedb.org/3/search/movie?query=${itemPesquisado}&include_adult=false&language=pt-br&page=1`, options)
        let dados = await resposta.json()
        if(dados.results == 0){
            mostrarErro()
            return
        }
        if(dados.results == 0){
            mostrarErro()
            return
        }
        let dadosFilme = dados.results

        
        conteinerFilmes.innerHTML =''
        // inputPesquisa.value = ''
        
        funcoes.criarFilmes(dadosFilme)
        await procurarSerie(itemPesquisado)
}

const procurarSerie = async(itemPesquisado) =>{
    let resposta = await fetch(`https://api.themoviedb.org/3/search/tv?query=${itemPesquisado}&include_adult=false&language=pt-br&page=1`, options)
    let dados = await resposta.json()
    let dadosFilme = dados.results

    funcoes.criarFilmes(dadosFilme)
}

const seriesPopulares = async() =>{
    conteinerFilmes.innerHTML = ''

    let resposta = await fetch(URLS.urlSeriesPopulares, options)
    let dados = await resposta.json()
    let dadosFilme = dados.results

    funcoes.criarFilmes(dadosFilme)
}

const filmesPopulares = async() =>{
    conteinerFilmes.innerHTML = ''

    let resposta = await fetch(URLS.urlFilmesPopulares, options)
    let dados = await resposta.json()
    let dadosFilme = dados.results

    funcoes.criarFilmes(dadosFilme)
} 

const mostrarErro = () =>{
    conteinerFilmes.innerHTML = '<p style="color: white; font-size: 1.7rem;">Nenhum resultado encontrado!</p>'
}






requisicaoPadrao()




//EVENTOS
document.querySelector('#btn-procurar').addEventListener('click', procurarFilme)
inputPesquisa.addEventListener('keydown', (e) =>{
    e.key == 'Enter' ? procurarFilme() : false
})
inputPesquisa.oninput = procurarFilme

document.querySelector('#melhor-avaliados').addEventListener('click', requisicaoPadrao)
document.querySelector('#series-populares').addEventListener('click', seriesPopulares)
document.querySelector('#filmes-populares').addEventListener('click', filmesPopulares)
document.querySelector('#filmes-curtidos').addEventListener('click', funcoes.carregarItensCurtidos)
