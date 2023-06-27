var el = document.createElement('div');

el.classList = "div-criada"

console.log(el)

let conteiner = document.querySelector('#conteiner');

conteiner.appendChild(el)

const subtitle = document.createElement('h3')

subtitle.innerText = "Olá Alunos";

// conteiner.append(subtitle)
conteiner.prepend(subtitle)

let el2 = document.createElement('div')
el2.classList.add('div-before')

let el3 = document.querySelector('#conteiner .div-criada')

console.log(el3)

conteiner.insertBefore(el2,el3)