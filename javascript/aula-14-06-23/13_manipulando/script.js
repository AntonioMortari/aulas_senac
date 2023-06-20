// Manipulando o conteúdo
// textContent
// Conteúdo do texto do elemento

const element = document.querySelector('h1')

element.textContent = "Olá Devs"

//Trocar o conteúdo do elemento
//innerText
//element.innerText

//Trocar o conteúdo html do elemento
//innerHTML
element.innerHTML = "Olá <small>FrontEND</small>"

const elementInput = document.querySelector('input')
// console.log(elementInput.value)
elementInput.value = "Valor que eu quiser"