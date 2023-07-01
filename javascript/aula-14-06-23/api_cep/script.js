let btn = document.getElementById('btn')

const mostrarResposta = (objeto) =>{
    let resposta = document.getElementById('resposta')
    resposta.innerHTML = `
        <p>Rua: ${objeto.logradouro}</p>
        <p>Cidade: ${objeto.localidade}</p>
        <p>Estado: ${objeto.uf}</p>
    `
}

const pegarResposta = () =>{
    let cep = document.querySelector('#cep').value
    let url = `https://viacep.com.br/ws/${cep}/json/`

    if (cep.length != 8) {
        alert('ERRO : Digite um cep válido')
    } else {

        fetch(url)
            .then((resposta) => {
                resposta.json().then((respostaJson) => {
                    if(respostaJson.erro){
                        let resposta = document.getElementById('resposta')
                        resposta.innerHTML = `
                        <p>CEP não encontrado!</p>
                        `
                        return
                    }else{
                        mostrarResposta(respostaJson)
                    }
                })
            })
            .catch(() =>{
                let resposta = document.getElementById('resposta')
                resposta.innerHTML = `
                    <p>CEP não encontrado!</p>
                `
            })

    }
}

btn.addEventListener('click' , (event) =>{
    event.preventDefault()
    pegarResposta()
})

