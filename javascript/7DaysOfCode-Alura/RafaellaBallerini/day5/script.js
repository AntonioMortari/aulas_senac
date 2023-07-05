'use strict';

let btn = document.querySelector('#btn')
let resposta = document.querySelector('#res')
let frutas = []
let laticinios = []
let congelados = []
let carnes = []
let doces = []
let outros = []
let listaDeCompras = [frutas,laticinios,congelados,carnes,doces,outros]

const mostrarResposta = () =>{
    resposta.innerHTML = `
        Sua Lista de Compras:
        <p>Frutas e Verduras: ${frutas}</p>
        <p>Laticínios: ${laticinios}</p>
        <p>Carnes em Geral: ${carnes}</p> 
        <p>Congelados: ${congelados}</p>
        <p>Doces: ${doces}</p>
        <p>Outros: ${outros}</p>
    `
}

const comecarListaDeCompras = () =>{
    listaDeCompras.forEach((categoria) =>{
        categoria = []
    }) 
    while(prompt('Deseja adicionar um item á sua lista de compras? [1] - SIM ou [2] - NÃO') == 1){
        let item = prompt('Qual o nome do item?')
        let categoria = Number(prompt('Qual categoria ele se encaixa? [1] - Laticínios [2] - Frutas e verduras [3] - Doces [4] Carnes em geral [5] - Congelados [6] - Outros '))

        switch(categoria){
            case 1:
                laticinios.push(item)
                break
            
            case 2:
                frutas.push(item)
                break
            
            case 3:
                doces.push(item)
                break

            case 4:
                carnes.push(item)
                break

            case 5:
                congelados.push(item)
                break

            case 6:
                outros.push(item)
                break
        }
    }

    mostrarResposta()

}

btn.addEventListener('click', comecarListaDeCompras)