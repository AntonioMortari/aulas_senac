'use strict';

//inserindo dados
// objeto Json chave:valor

localStorage.setItem("name" , "matheus")

let name = localStorage.getItem("name")

console.log(name)

let lastname = localStorage.getItem("lastname")

if(!lastname){
    console.log("sem sobrenome")
}


localStorage.removeItem("name")

//limpar todos os itens(linha 28)

localStorage.setItem('a' , 1)
localStorage.setItem('b' , 2)

// console.log(typeof localStorage.getItem("a"))

// localStorage.clear()

//salvar objeto

const person = {
    name:'Thiago',
    age:36,
    job:"Programmer"
}

localStorage.setItem("person", person)

localStorage.setItem("person", JSON.stringify(person))
//converte o objeto json em string e armazena no local storage

const getPerson = localStorage.getItem("person")
//converte a string em objeto, onde suas propriedades podem ser acessadas
console.log(getPerson)

const personObj = JSON.parse(getPerson)
console.log(personObj.job)

// -> JSON string
// <- volta como objeto com JSON.parse(nomeobjeto)

localStorage.clear()