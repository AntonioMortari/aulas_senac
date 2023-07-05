'use strict';

let cards = document.querySelectorAll('.card')
let indice = 0
let imagemPersonagem = document.querySelector('#imagem-personagem')
let nomePersonagem = document.querySelector('#nome-personagem')
let descricaoPersonagem = document.querySelector('#descricao-personagem')

//objetos
let personagem1 = {
    src :'src/imagens/card-ciclope.png',
    nome:'Ciclope',
    descricao:'Descrição do ciclope'
}

let personagem2 = {
    src :'src/imagens/card-jean-grey.png',
    nome:'Jean Grey',
    descricao:'Descrição da Jean Grey'
}

let personagem3 = {
    src :'src/imagens/card-lince-negra.png',
    nome:'Lince Negra',
    descricao:'Descrição da Lince Negra'
}

let personagem4 = {
    src :'src/imagens/card-magneto.png',
    nome:'Magneto',
    descricao:'Descrição do Magneto'
}

let personagem5 = {
    src :'src/imagens/card-noturno.png',
    nome:'Noturno',
    descricao:'Descrição do Noturno'
}

let personagem6 = {
    src :'src/imagens/card-tempestade.png',
    nome:'Tempestade',
    descricao:'Descrição da Tempestade'
}

let personagem7 = {
    src :'src/imagens/card-vampira.png',
    nome:'Vampira',
    descricao:'Descrição da Vampira'
}

let personagem8 = {
    src :'src/imagens/card-wolverine.png',
    nome:'Wolverine',
    descricao:'Descrição do Wolverine'
}

let personagens = [personagem1, personagem2, personagem3, personagem4, personagem5, personagem6, personagem7, personagem8]



const trocarPersonagem = (indice) =>{
    imagemPersonagem.src = personagens[indice].src
    
    nomePersonagem.textContent = personagens[indice].nome

    descricaoPersonagem.textContent = personagens[indice].descricao
}


const pegarIndiceElemento = (evento) =>{
    let id = evento.currentTarget.id;
    indice = Number(id);
    trocarPersonagem(indice) 
}

cards.forEach((card,index) =>{
    card.id = index
    card.addEventListener('mouseenter',pegarIndiceElemento)
})
    trocarPersonagem()