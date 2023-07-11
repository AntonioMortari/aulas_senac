'use strict'

import chaveApi from "./chave.js";



//elementos
let dados;
let conteinerFilmes = document.querySelector('#conteiner')
let indice = 0
let intervaloFilmes;
let inputProcurar = document.querySelector('#filme')
let iconeProcurar = document.querySelector('#icone-procurar')
let paginaInicial = document.querySelector('#icone-pagina-inicial')
let resultadosEncontrados = document.querySelector('#resultados-encontrados')
let filmesFavoritos = JSON.parse(localStorage.getItem('filmes-favoritos')) || []
let checkBox = document.querySelector('#mostrar-favoritos')
let arrayFilmesFavoritos = JSON.parse(localStorage.getItem('info-filmes-favoritos')) || []




const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: chaveApi
    }
};

//funções
const fazerRequisicaoDados = async () => {
    try {
        let resposta = await fetch('https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1', options)
        dados = await resposta.json()
        pegarArrayFilmes(dados)
    } catch (err) {
        console.log(err)
    }
}

const pegarArrayFilmes = (dados) => {
    let arrayFilmes = dados.results
    arrayFilmes.forEach((filme) => {
        criarFilme(filme)
    })
}

const criarFilme = (filme) => {
    let infoFilme = filme
    let divFilme = document.createElement('div')
    divFilme.classList.add('filme', 'animacao-subida')
    conteinerFilmes.appendChild(divFilme)
    mostrarFilme(divFilme, infoFilme)
}
const mostrarFilme = (divFilme, infoFilme) => {
    let data = infoFilme.release_date.split('-').reverse().join('-')
    let UrlImagem = 'https://image.tmdb.org/t/p/w500'

    divFilme.innerHTML = `
    <img class="imagem-filme" src="${UrlImagem}${infoFilme.backdrop_path}" alt="Imagem cartaz do ${infoFilme.title}">
    <div class="filme-info">
    

        <p><span class="nome-filme">${infoFilme.title}</span> (<span class="ano">${data}</span>)</p>

        <div class="filme-info-icons">
            <img src="src/imagens/estrela.svg" alt="">
            <p class="avaliacao">${infoFilme.vote_average.toFixed(1)}</p>

            <i class="fa-regular fa-heart" style= "color:#ff0000;"></i>
            <p>Favoritar</p>
        </div>
    </div>

    <div class="filme-descricao">
        <p>${infoFilme.overview}</p>
    </div>
    `
    let iconeFavoritar = divFilme.querySelector('i.fa-heart')
    iconeFavoritar.addEventListener('click', (icone) => {
        toggleIcone(icone.target)
    })

    if (localStorage.getItem('filmes-favoritos')) {
        let filmesLocalStorage = JSON.parse(localStorage.getItem('filmes-favoritos'))
        filmesLocalStorage.forEach((filme) => {
            if (filme == `${infoFilme.title}`) {
                divFilme.querySelector('.fa-heart').classList.remove('fa-regular')
                divFilme.querySelector('.fa-heart').classList.add('fa-solid')

            }
        })
    }
}


const pesquisarFilmes = async () => {
    if (inputProcurar.value.length == 0) {
        alert('Digite um filme para procura-lo!')
        return
    }
    desmarcarCheckBox()
    conteinerFilmes.innerHTML = ''
    let filmeProcurado = inputProcurar.value
    try {
        let resposta = await fetch(`https://api.themoviedb.org/3/search/movie?query=${filmeProcurado}&include_adult=false&language=pt-br&page=1`, options)
        let resultadoPesquisa = await resposta.json()
        pegarArrayFilmes(resultadoPesquisa)
        resultadosEncontrados.innerHTML = `${resultadoPesquisa.total_results} resultados para "${filmeProcurado}"`
        if (resultadoPesquisa.total_results == 0) {
            resultadosEncontrados.innerHTML = `Nenhum resultado encontrado para "${filmeProcurado}"`
        }
    } catch (err) {
        console.log(err)
        conteinerFilmes.innerHTML = 'Ocorreu um erro inesperado!'
    }
}

const desmarcarCheckBox = () =>{
    checkBox.checked = false
}

const voltarPaginaInicial = () => {
    desmarcarCheckBox()
    resultadosEncontrados.innerHTML = ''
    conteinerFilmes.innerHTML = ''
    fazerRequisicaoDados()
}

const pegarInformacoesFilme = (conteinerFilme) => {
    arrayFilmesFavoritos.push({
        src: conteinerFilme.querySelector('.imagem-filme').src,
        nome: conteinerFilme.querySelector('.nome-filme').textContent,
        ano: conteinerFilme.querySelector('.ano').textContent,
        avaliacao: conteinerFilme.querySelector('.avaliacao').textContent,
        descricao: conteinerFilme.querySelector('.filme-descricao p').textContent
    })

    //salvar no local storage
    localStorage.setItem('info-filmes-favoritos', JSON.stringify(arrayFilmesFavoritos))
}

const toggleIcone = (icone) => {
    let conteinerFilme = icone.parentNode.parentNode.parentNode
    icone.classList.toggle('fa-regular')
    icone.classList.toggle('fa-solid')


    if (icone.classList.contains('fa-solid')) {
        adicionarFilmeLocalStorage(icone)
        pegarInformacoesFilme(conteinerFilme)
    }
    if (icone.classList.contains('fa-regular')) {
        removerFilmeLocalStorage(conteinerFilme)
        removerInformacoesLocalStorage(conteinerFilme)
    }

}

const adicionarFilmeLocalStorage = (icone) => {
    let conteinerFilme = icone.parentNode.parentNode.parentNode
    let nomeFilmeFavoritado = conteinerFilme.querySelector('.nome-filme').textContent
    filmesFavoritos.push(nomeFilmeFavoritado)

    localStorage.setItem('filmes-favoritos', JSON.stringify(filmesFavoritos))
}

const removerFilmeLocalStorage = (conteinerFilme) => {
    let nomeFilmeExcluido = conteinerFilme.querySelector('.nome-filme').textContent
    let indice = filmesFavoritos.indexOf(nomeFilmeExcluido)
    filmesFavoritos.splice(indice, 1)

    localStorage.setItem('filmes-favoritos', JSON.stringify(filmesFavoritos))
}

const removerInformacoesLocalStorage = (conteinerFilme) => {
    const nomeFilmeExcluido = conteinerFilme.querySelector('.nome-filme').textContent;
    const index = arrayFilmesFavoritos.findIndex(filme => filme.nome === nomeFilmeExcluido);

    if (index !== -1) {
        arrayFilmesFavoritos.splice(index, 1);
        localStorage.setItem('info-filmes-favoritos', JSON.stringify(arrayFilmesFavoritos));
    }
}

const toggleFavoritos = (e) => {
    if (e.target.checked) {
        exibirFilmesFavoritos()
    } else {
        //voltar pro inicio
        conteinerFilmes.innerHTML = ''
        voltarPaginaInicial()

    }
}

const exibirFilmesFavoritos = () => {
    conteinerFilmes.innerHTML = ''
        arrayFilmesFavoritos.forEach((infoFilme) => {
            let divFilme = document.createElement('div')
        divFilme.classList.add('animacao-subida', 'filme')
        divFilme.innerHTML = `
        <img class="imagem-filme" src="${infoFilme.src}" alt="Imagem cartaz do ${infoFilme.nome}">
        <div class="filme-info">
        
    
            <p><span class="nome-filme">${infoFilme.nome}</span> (<span class="ano">${infoFilme.ano}</span>)</p>
            
            <div class="filme-info-icons">
                <img src="src/imagens/estrela.svg" alt="">
                <p class="avaliacao">${infoFilme.avaliacao}</p>
    
                <i class="fa-regular fa-heart" style= "color:#ff0000;"></i>
                <p class="favoritar">Favoritar</p>
                </div>
                </div>
                
                <div class="filme-descricao">
                <p>${infoFilme.descricao}</p>
                </div>
                `
                
                conteinerFilmes.appendChild(divFilme)
                
                let btnExcluirFavorito = divFilme.querySelector('.fa-heart')
                let textoFavoritar = divFilme.querySelector('.favoritar')
                textoFavoritar.textContent = 'Desfavoritar'
                btnExcluirFavorito.classList.remove('fa-heart')
                btnExcluirFavorito.classList.add('fa-trash-can')
                btnExcluirFavorito.removeEventListener('click', toggleIcone)
                btnExcluirFavorito.addEventListener('click', (e) =>{
                    excluirFavorito(e.target)
                })
            })
}

const excluirFavorito = (e) =>{
    let filme = e.parentNode.parentNode.parentNode
    filme.remove()
    removerFilmeLocalStorage(filme)
    removerInformacoesLocalStorage(filme)
}

fazerRequisicaoDados()

//eventos
iconeProcurar.addEventListener('click', pesquisarFilmes)
inputProcurar.addEventListener('keydown', (evento) => {
    if (evento.key == 'Enter') {
        pesquisarFilmes()
    }
})
paginaInicial.addEventListener('click', voltarPaginaInicial)
checkBox.addEventListener('change', (e) => {
    toggleFavoritos(e)
})

if (checkBox.checked) {
    exibirFilmesFavoritos();
}


