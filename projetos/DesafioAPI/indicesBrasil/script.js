let botoes = document.querySelectorAll('.botoes')
let indice = document.querySelector('#indice')
let legendaIndice = document.querySelector('#legenda-indice')
let url = 'https://brasilapi.com.br/api/taxas/v1'

const mostrarIndice = async(elemento) =>{
    let resposta = await fetch(url)
    let indices = await resposta.json()
    let idElementoClicado = elemento.target.id

    
    if(idElementoClicado == 'selic'){
        legendaIndice.innerHTML = `A <strong>Taxa Selic</strong> atualmente está em:`
        indice.innerHTML = `${indices[0].valor}%`
    }
    if(idElementoClicado == 'cdi'){
        legendaIndice.innerHTML = `O <strong>CDI</strong> atualmente está em:`
        indice.innerHTML = `${indices[1].valor}%`
    }
    if(idElementoClicado == 'inflacao'){
        legendaIndice.innerHTML = `A <strong>inflação</strong> atualmente está em:`
        indice.innerHTML = `${indices[2].valor}%`
    }
}

botoes.forEach((btn) =>{
    btn.addEventListener('click' , (evento) =>{
        mostrarIndice(evento)
    })
})



