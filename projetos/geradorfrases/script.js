var btn = document.getElementById('btn')
var res = document.getElementById('res')

var frase = ["Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado - Roberto Shinyashiki",
"Somos feitos de carne, mas temos de viver como se fôssemos de ferro - Sigmund Freud",
"Nem todas as tempestades vêm para atrapalhar a sua vida. Algumas vêm para limpar seu caminho - Desconhecido",
"Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação - Dalai Lama",
"O insucesso é apenas uma oportunidade para recomeçar com mais inteligência - Henry Ford",
"Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós mesmos - Friedrich Nietzsche",
"Nossa maior fraqueza está em desistir. O caminho mais certo de vencer é tentar mais uma vez - Thomas Edison",
"O importante não é vencer todos os dias, mas lutar sempre - Waldemar Valle Martins",
"É melhor conquistar a si mesmo do que vencer mil batalhas - Buda"
]

function frases(){
    let randomNum = Math.floor(Math.random() * 7) + 1
    res.innerHTML = `${frase[randomNum]}`
}

btn.addEventListener('click',frases)

console.log()