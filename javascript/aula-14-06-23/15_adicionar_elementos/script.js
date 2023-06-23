var el = document.createElement('div');

el.classList = "div-criada"

console.log(el)

let conteiner = document.querySelector('#conteiner');

conteiner.appendChild(el)

const subtitle = document.createElement('h3')

subtitle.innerText = "Olá Alunos";

// conteiner.append(subtitle)
conteiner.prepend(subtitle)