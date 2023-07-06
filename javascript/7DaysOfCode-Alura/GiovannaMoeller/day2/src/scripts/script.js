'use strict'

let filmes = [
    {},
    {
        src:'https://th.bing.com/th/id/OIP.NqDa4F851a807kFi_gWfJQHaE8?pid=ImgDet&rs=1' ,
        nome:'Vingadores Ultimato',
        descricao:'Em Vingadores: Ultimato, após Thanos eliminar metade das criaturas vivas em Vingadores: Guerra Infinita, os heróis precisam lidar com a dor da perda de amigos e seus entes queridos. Com Tony Stark (Robert Downey Jr.) vagando perdido no espaço sem água nem comida, o Capitão América/Steve Rogers (Chris Evans) e a Viúva Negra/Natasha Romanov (Scarlett Johansson) precisam liderar a resistência contra o titã louco.',
        ano: '2019'
    },

    {
        src:'https://th.bing.com/th/id/OIP.PPZyrmQrI7emtmdyqA7AcwHaEK?pid=ImgDet&rs=1' ,
        nome:'Homem Aranha - Sem Volta Pra Casa',
        descricao:'Em Homem-Aranha: Sem Volta para Casa, Peter Parker (Tom Holland) precisará lidar com as consequências da sua identidade como o herói mais querido do mundo após ter sido revelada pela reportagem do Clarim Diário, com uma gravação feita por Mysterio (Jake Gyllenhaal) no filme anterior. Incapaz de separar sua vida normal das aventuras de ser um super-herói, além de ter sua reputação arruinada por acharem que foi ele quem matou Mysterio e pondo em risco seus entes mais queridos, Parker pede ao Doutor Estranho (Benedict Cumberbatch) para que todos esqueçam sua verdadeira identidade. Entretanto, o feitiço não sai como planejado e a situação torna-se ainda mais perigosa quando vilões de outras versões de Homem-Aranha de outro universos acabam indo para seu mundo. Agora, Peter não só deter vilões de suas outras versões e fazer com que eles voltem para seu universo original, mas também aprender que, com grandes poderes vem grandes responsabilidades.',
        ano: '2021'
    },

    {
        src:'https://s2.glbimg.com/8Q3Qza9W_t-gV7a0iwVkIScAlO4=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/M/r/8dMyuXSJq69KdiXUNsGA/doutor-estranho-capa.jpg' ,
        nome:'Doutor Estranho no Multiverso da Loucura',
        descricao:'Em Doutor Estranho no Multiverso da Loucura, após derrotar Dormammu e enfrentar Thanos nos eventos de Vingadores: Ultimato, o Mago Supremo, Stephen Strange (Benedict Cumberbatch), e seu parceiro Wong (Benedict Wong), continuam suas pesquisas sobre a Joia do Tempo. Mas um velho amigo que virou inimigo coloca um ponto final nos seus planos e faz com que Strange desencadeie um mal indescritível, o obrigando a enfrentar uma nova e poderosa ameaça. O longa se conecta com a série do Disney+ WandaVision e tem relação também com Loki. O longa pertence a fase 4 do MCU onde a realidade do universo pode entrar em colapso por causa do mesmo feitiço que trouxe os vilões do Teioso para o mundo dos Vingadores e o Mago Supremo precisará contar com a ajuda de Wanda (Elizabeth Olsen), que vive isolada desde os eventos de WandaVision.',
        ano: '2022'
    }

]

let conteinerFilmes = document.querySelector('#conteiner')

let indice = 0

let intervaloFilmes;

const mostrarFilme = (divFilme) =>{
    console.log(filmes[indice].src)
    divFilme.innerHTML = `
    <img class="imagem-filme" src="${filmes[indice].src}" alt="filme">

    <div class="filme-info">
        <p>${filmes[indice].nome} (<span class="ano">${filmes[indice].ano}</span>)</p>

        <div class="filme-info-icons">
            <img src="src/imagens/estrela.svg" alt="">
            <p>9.0</p>

            <img src="src/imagens/coração.svg" alt="">
            <p>Favoritar</p>
        </div>
    </div>

    <div class="filme-descricao">
        <p>${filmes[indice].descricao}</p>
    </div>
    `
}

const criarFilme = () =>{
    indice++
    console.log(filmes.length, indice)
    if(indice > filmes.length){
        clearInterval(intervaloFilmes)
        return
    }
    let divFilme = document.createElement('div')
    divFilme.classList.add('filme', 'animacao-subida')
    conteinerFilmes.appendChild(divFilme)
    mostrarFilme(divFilme)
}

const iniciarExecucao = () =>{
    intervaloFilmes = setInterval(criarFilme, 1000)
}

window.addEventListener('load' , iniciarExecucao)

