'use strict';

let btn = document.getElementById('btn')
let conteiner = document.getElementById('conteiner')
let conteinerTarefas = document.querySelector('#tarefas')
let inputTarefa = document.querySelector('#input-tarefa')
let btnRemoverTudo = document.querySelector('#trash')

const adicionarTarefa = () =>{
    if(inputTarefa.value.length == 0){
        alert('ERRO, digite uma tarefa!')
        return
    }else{
        let tarefa = document.createElement('div')
        tarefa.classList.add('tarefa')
        tarefa.innerHTML = `
        <span>${inputTarefa.value}</span>
        <i class="bi bi-x-lg"></i>
        `
        conteinerTarefas.appendChild(tarefa)
        inputTarefa.value = ''
        armazenarTarefa(inputTarefa.value)
        
    }
}

const removerTarefa = (evento) =>{
    let elemento = evento.target
    elemento.parentNode.remove()
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

btnRemoverTudo.addEventListener('click' , () =>{
    if(confirm('Tem certeza que deseja remover todas as tarefas?')){
        conteinerTarefas.innerHTML = ''
    }
})