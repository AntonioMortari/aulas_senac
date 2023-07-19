'use strict'
import chaveAPI from "./chave.js"
import { elementos } from "./utilis.js"

//variaveis e elementos
let inputCidade = document.querySelector('#cidade-input')
let btnProcurar = document.querySelector('#buscar')
let msgErro = document.querySelector('#msg-erro')
let loading = document.querySelector('#loading')

let conteinerDados = document.querySelector('#weather-data')
conteinerDados.style.display = 'none'



//funções
const pegarDados = async(cidade) =>{
    msgErro.style.display = 'none'
    conteinerDados.style.display = 'none'
    loading.style.display = 'block'
    let resposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${chaveAPI}&lang=pt_br`)
    let dados = await resposta.json()

    return dados
}



const mostrarDados = async() =>{
    if(inputCidade.value.length == 0){
        alert('Erro, digite uma cidade para ver o clima!')
        return
    }else{
        let cidade = inputCidade.value
        const dados = await pegarDados(cidade)
        if(dados.message == 'city not found'){
            conteinerDados.style.display = 'none'
            msgErro.style.display = 'block'
            msgErro.innerHTML = '<p class="erro">Cidade não encontrada!</p>'
            loading.style.display = 'none' 
            return  
        }else{
            loading.style.display = 'none'
            conteinerDados.style.display = 'block'
            msgErro.style.display = 'none'
            
            //mostrar dados
            elementos.cidadePesquisada.textContent = `${dados.name}`
            elementos.bandeira.src =  `https://flagsapi.com/${dados.sys.country}/flat/64.png`
            elementos.temperatura.textContent = `${dados.main.temp.toFixed(1)} °C` 
            elementos.descricao.textContent = `${dados.weather[0].description}`
            elementos.iconeTempo.src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
            elementos.umidade.textContent = `${dados.main.humidity}%`
            elementos.vento.textContent = `${dados.wind.speed} Km/h`
        }
    }
}

//eventos
btnProcurar.addEventListener('click' ,mostrarDados)
inputCidade.addEventListener('keydown', (e) =>{
    if(e.key == 'Enter'){
        mostrarDados()
    }
})