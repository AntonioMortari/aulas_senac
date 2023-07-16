'use strict'
let inputPokemon = document.querySelector('#input-pokemon')
let imgPokemon = document.querySelector('#img-pokemon')
let nomePokemon = document.querySelector('#nome-pokemon')
let idPokemon = document.querySelector('#id-pokemon')

let indicePokemon = 1

const fetchPokemon = async(nomeOuId) =>{
    nomePokemon.textContent = 'Loading...'
    idPokemon.textContent = ''    

    let resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomeOuId}`)

    if(resposta.status == 200){
        let dados = await resposta.json()
        mostrarPokemon(dados)
        return
    }

    nomePokemon.innerHTML = 'Não encontrado :c'
    idPokemon.textContent = ''
    imgPokemon.style.display = 'none'
}

const mostrarPokemon = (dadosPokemon) =>{
    imgPokemon.style.display = 'block'
    let nome = dadosPokemon.name
    let id = dadosPokemon.id
    let src = dadosPokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
    indicePokemon = Number(id)
    
    nomePokemon.textContent = `${nome}`
    idPokemon.textContent = `${id}`
    imgPokemon.src = `${src}`
    
}

inputPokemon.addEventListener('keydown', (e) =>{
    if(e.key == 'Enter'){
        let nomePokemon = inputPokemon.value.toLowerCase()
        inputPokemon.value = ''
        fetchPokemon(nomePokemon)
    }
})

document.querySelector('.btn-next').addEventListener('click', () =>{
    indicePokemon++
    fetchPokemon(indicePokemon)
})
document.querySelector('.btn-prev').addEventListener('click', () =>{
    if(indicePokemon == 1){
        return
    }
    indicePokemon--
    fetchPokemon(indicePokemon)
})

document.addEventListener('keydown', (e) =>{
    if(e.key == 'ArrowRight'){
        indicePokemon++
        fetchPokemon(indicePokemon)
    }else if(e.key == 'ArrowLeft'){
        if(indicePokemon == 1){
            return
        }
        indicePokemon--
        fetchPokemon(indicePokemon)
    }
})

fetchPokemon('1')