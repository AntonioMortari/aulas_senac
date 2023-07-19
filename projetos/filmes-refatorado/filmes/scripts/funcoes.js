let conteinerFilmes = document.querySelector('#conteiner-filmes')
let itensLocalStorage = JSON.parse(localStorage.getItem('itens')) || []




//criar e mostrar filmes
const criarFilmes = (dadosFilme) =>{
    dadosFilme.forEach(infoFilme =>{
        let filme = document.createElement('li')
        filme.classList.add('filme')
        
        mostrarFilmesCriado(filme,infoFilme)
    })
}

const mostrarFilmesCriado = (filme,infoFilme) =>{
    if(!infoFilme.poster_path){
        return
    }
    conteinerFilmes.appendChild(filme)

    //verificando se é serie ou filme e pegando as informações
    let data = infoFilme.first_air_date || infoFilme.release_date
    let nome = infoFilme.title || infoFilme.name
    let src = URLS.urlImagens + infoFilme.poster_path
    if(!src){
        //se não tiver imagem
        return
    }

    //formatando data
    data = data.split('-').reverse('-')
    data = data[2]

    filme.innerHTML = `
    <div class="descricao">
                    <p>${infoFilme.overview}</p>
                </div>
    <div class="imagem">
    <img src="${src}" alt="Cartaz de ${nome}">
</div>
<div class="info">
    <p><span class="nome-filme">${nome}</span> (<span class = "data">${data}</span>)</p>
    <div class="icones">
        <p class="avaliacao"><i class="fa-solid fa-star" style="color: #ffdd00;"></i>${infoFilme.vote_average.toFixed(1)}</p>

        <abbr title="Marcar como gostei"><i class="fa-regular fa-heart curtir" style="color: #f82525;"></i></abbr>
    </div>
</div>
    `
    
    let btn = filme.querySelector('.curtir')
    adicionarEventoAoBotaoGostei(btn)

    carregarComoFavorito()
}

const carregarComoFavorito = () =>{
    itensLocalStorage.forEach(item =>{
        if(item.nome == nome){
            //se o filme estiver no localstorage carregue-o como favorito
            btn.classList.remove('fa-regular')
            btn.classList.add('fa-solid') 
        }
    })
}

const adicionarEventoAoBotaoGostei = (btn) =>{
    btn.addEventListener('click', (e) =>{
        marcarGostei(e.target)
    })
}

const marcarGostei = (btn) =>{
    btn.classList.toggle('fa-regular')
    btn.classList.toggle('fa-solid')

    btn.classList[2] == 'fa-solid' ? adicionarItemLocalStorage(btn) : removerItemLocalStorage(btn)
}


const adicionarItemLocalStorage = (btn) =>{
    
    let dadosFilmeCurtido = pegarDadosItemCurtido(btn)
    itensLocalStorage.push(dadosFilmeCurtido)

    localStorage.setItem('itens', JSON.stringify(itensLocalStorage))
    
}

const pegarDadosItemCurtido = (btn) =>{
    let itemCurtido = btn.parentNode.parentNode.parentNode.parentNode
    
    let dadosFilmeCurtido = {
        src: itemCurtido.querySelector('.imagem img').src,
        nome: itemCurtido.querySelector('.nome-filme').textContent,
        avaliacao: itemCurtido.querySelector('.avaliacao').textContent,
        data: itemCurtido.querySelector('.data').textContent,
        overview: itemCurtido.querySelector('.descricao').textContent
    }

    return dadosFilmeCurtido
}

const removerItemLocalStorage = (btn) =>{
    let filme = btn.parentNode.parentNode.parentNode.parentNode;
    let nomeFilmeRemovido = filme.querySelector('.nome-filme').textContent;
    let indiceFilmeRemovido = 0
    itensLocalStorage.forEach((item,indice) =>{
        if(item.nome == nomeFilmeRemovido){
            indiceFilmeRemovido = indice
        }
    })
    
    itensLocalStorage.splice(indiceFilmeRemovido, 1)

    localStorage.setItem('itens', JSON.stringify(itensLocalStorage))


}



const carregarItensCurtidos = () =>{
    conteinerFilmes.innerHTML = ''
    itensLocalStorage = JSON.parse(localStorage.getItem('itens'))
    itensLocalStorage.forEach(item =>{
        let filme = document.createElement('li')
        filme.classList.add('filme')
    
        filme.innerHTML = `
        <div class="descricao">
            ${item.overview}
        </div>     
        <div class="imagem">
        <img src="${item.src}" alt="Cartaz de ${item.nome}">
        </div>
    <div class="info">
        <p><span class="nome-filme">${item.nome}</span> (<span class = "data">${item.data}</span>)</p>
        <div class="icones">
            <p class="avaliacao"><i class="fa-solid fa-star" style="color: #ffdd00;"></i>${item.avaliacao}</p>
            <abbr title="Remover da lista"><i class="fa-regular fa-trash curtir" style="color: #f82525;"></i></abbr>
        </div>
    </div>
        `
        conteinerFilmes.appendChild(filme)

        let btn = filme.querySelector('.curtir')
        itensLocalStorage.forEach(itemls =>{
        if(itemls.nome == item.nome){
            btn.classList.remove('fa-regular')
            btn.classList.add('fa-solid') 
        }

        btn.addEventListener('click', (btn) =>{
            removerItemLocalStorage(btn.target)
            let filme = btn.target.parentNode.parentNode.parentNode.parentNode
            filme.remove()
        })
    })
    })

}

//urls
export const URLS = {
    urlFilmesPopulares : 'https://api.themoviedb.org/3/trending/movie/day?language=PT-BR',
    urlSeriesPopulares : 'https://api.themoviedb.org/3/trending/tv/week?language=PT-BR&page=1',
    urlMaisVotados : 'https://api.themoviedb.org/3/movie/top_rated?language=pt-br&page=1',
    urlImagens : 'https://image.tmdb.org/t/p/w500'
}

export const funcoes = {
    criarFilmes:criarFilmes,
    carregarItensCurtidos:carregarItensCurtidos
}