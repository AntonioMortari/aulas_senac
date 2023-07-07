'use strict';

let conteiner = document.querySelector('#conteiner')

let sons = {
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav'
}

const efeitoClick = (paiDaLetra) =>{
    paiDaLetra.classList.add('active')
    setTimeout(() =>{
        paiDaLetra.classList.remove('active')
    },150)
}

const tocarSom = (texto) =>{
    let letra = ''
    let paiDaLetra;
    let elementosLetra = []
    if(texto.type == 'click'){
        letra = texto.target.textContent
        paiDaLetra = texto.target
    }else{
        letra = texto.key.toUpperCase()
        elementosLetra = document.querySelectorAll('.tecla')
        for(let elemento of elementosLetra) {
            if(elemento.textContent == letra){
                paiDaLetra = elemento
                break
            }
        }
    }

    let audio = new Audio(`src/audio/${sons[letra]}`)
    audio.play()
    efeitoClick(paiDaLetra)
}

const criarTeclas = (texto) =>{
    let teclaCriada = document.createElement('div')
    teclaCriada.classList.add('tecla')
    teclaCriada.textContent = texto
    teclaCriada.addEventListener('click', tocarSom)
    conteiner.appendChild(teclaCriada)
}

const pegarArrayTeclas = () =>{
    Object.keys(sons).forEach((letra) =>{
        criarTeclas(letra)
    })
}

window.addEventListener('keydown', (evento) =>{
    tocarSom(evento)
})

pegarArrayTeclas()
