'use strict';

let btn = document.getElementById('btn')
let conteiner = document.getElementById('conteiner')
let conteinerTarefas = document.querySelector('#tarefas')
let inputTarefa = document.querySelector('#input-tarefa')
let btnRemoverTudo = document.querySelector('#trash')
let arrayLocalStorage = JSON.parse(localStorage.getItem('tarefas'))


let indice = 0

const adicionarTarefa = () =>{
    if(inputTarefa.value.length == 0){
        alert('ERRO, digite uma tarefa!')
        return
    }else{
        let nomeTarefa = inputTarefa.value
        arrayLocalStorage.push(nomeTarefa)
        adicionarTarefaLocalStorage()
        let tarefa = document.createElement('div')
        tarefa.classList.add('tarefa')
        indice++
        tarefa.id = indice
        tarefa.innerHTML = `
        <span class ="nome-tarefa">${inputTarefa.value}</span>
        <div class="icones-tarefa">
            <i class="bi bi-pencil-square"></i>
            <i class="bi bi-x-lg"></i>
        </div>
        `
        conteinerTarefas.appendChild(tarefa)
        inputTarefa.value = ''
        
    }
}

const adicionarTarefaLocalStorage = () =>{  
    localStorage.setItem('tarefas' , JSON.stringify(arrayLocalStorage))
}

const editarTarefa = (elemento) =>{
    let tarefa = elemento.target.parentNode.parentNode
    console.log(tarefa)
    let nomeTarefaAntiga = tarefa.querySelector('span').textContent
    let tarefaAtualizada = prompt('Digite a tarefa a clique em OK para atualizar.')
    let indiceTarefaAntiga = arrayLocalStorage.indexOf(nomeTarefaAntiga)
    arrayLocalStorage[indiceTarefaAntiga] = tarefaAtualizada

    adicionarTarefaLocalStorage()

    tarefa.innerHTML = `
        <span>${tarefaAtualizada}</span>
        <div class="icones-tarefa">
            <i class="bi bi-pencil-square"></i>
            <i class="bi bi-x-lg"></i>
        </div>
        `
} 

const removerTarefa = (evento) =>{
    let iconeTarefa = evento.target.parentNode
    let conteinerTarefa = iconeTarefa.parentNode
    let nomeTarefaRemovida = conteinerTarefa.querySelector('span').textContent
    
    arrayLocalStorage = JSON.parse(localStorage.getItem('tarefas'))
    console.log(arrayLocalStorage)

    if(arrayLocalStorage.includes(nomeTarefaRemovida)){
        indice = arrayLocalStorage.indexOf(nomeTarefaRemovida)
        arrayLocalStorage.splice(indice,1)
        adicionarTarefaLocalStorage()
    }
    
    let elemento = evento.target.parentNode
    elemento.parentNode.remove()
    
}

const carregarTarefasLS = () =>{
    if(localStorage.getItem('tarefas')){
        var arrayTarefas = JSON.parse(localStorage.getItem('tarefas'))
        arrayTarefas.forEach((nomeTarefa) =>{
            let tarefa = document.createElement('div')
            tarefa.classList.add('tarefa')
            tarefa.innerHTML = `
            <span>${nomeTarefa}</span>
            <div class="icones-tarefa">
                <i class="bi bi-pencil-square"></i>
                <i class="bi bi-x-lg"></i>
            </div>
            `
            conteinerTarefas.appendChild(tarefa)
        })
    }else{
        return
    }
}

btn.addEventListener('click' , adicionarTarefa)

inputTarefa.addEventListener('keydown' , (evento) =>{
    if(evento.key == 'Enter'){
        adicionarTarefa()
    }
})

conteinerTarefas.addEventListener('click' , (evento) =>{
    if(evento.target.classList.contains('bi-x-lg')){
        removerTarefa(evento)
    }
})

conteinerTarefas.addEventListener('click' , evento =>{
    if (evento.target.classList.contains('bi-pencil-square')){
        editarTarefa(evento)
    }
})

btnRemoverTudo.addEventListener('click' , () =>{
    if(confirm('Tem certeza que deseja remover todas as tarefas?')){
        conteinerTarefas.innerHTML = ''
        arrayLocalStorage = []
        adicionarTarefaLocalStorage()
    }
})

window.addEventListener('load' , carregarTarefasLS)
