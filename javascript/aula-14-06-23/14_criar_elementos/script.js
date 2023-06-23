const element = document.querySelector('h3')
console.log(element.parentNode) 

//elementos filhos

const elDaddy = document.querySelector('div')
console.log(elDaddy.childNodes)
console.log(elDaddy.children)
console.log(elDaddy.firstElementChild)

//inserir elemento no body
let novoParagrafo = document.createElement('p')
let texto = document.createTextNode('Este é o conteúdo do parágrafo')

novoParagrafo.appendChild(texto)

//capturar o body 
const body = document.querySelector('body')

body.appendChild(novoParagrafo)

console.log(novoParagrafo)

let div = document.querySelector('#conteiner')

let el = document.createElement('span')

el.appendChild(document.createTextNode('Texto Span'))

div.appendChild(el)

console.log(div)

