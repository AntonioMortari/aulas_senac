
let nome = prompt('Olá, qual o seu nome?')

if(prompt(`${nome}, você quer seguir para área de [1] - Front-End ou [2] - Back-End?`) == 1)
{
    prompt('Você quer aprender [1] - React ou [2] - Vue?')
}else{
    prompt('Você quer aprender [1] - C# ou [2] - Java?')
}

if(prompt('Você quer [1] - seguir se especializando na área escolhida ou [2] - se desenvolver pra se tornar fullstack?') == 1){
    alert('Ok, você pretende seguir na área escolhida')
}else{
    alert('òtimo, é muito bom se desenvolver e aprender outras tecnologias :)')
}

while(prompt('Tem mais alguma tecnologia que você gostaria de aprender? Responda sim para informa-la') == 'sim'){
    prompt('Informe qual tecnologia você gostaria de aprender')
}

alert(`Obrigado por responder as perguntas ${nome}, desejo sucesso na sua carreira :)`)
