//pegar elementos
let btnAbrirCadastro = document.querySelector('#btn-cadastrar')
let body = document.querySelector('body')
let telaCadastro = document.querySelector('#cadastro')
let btnFecharTelaCadastro = document.querySelector('#fechar-cadastro')
let btnCadastrar = document.querySelector('#cadastrar')
let tabela = document.querySelector('#clientes-cadastrados')


//funções
const fecharTelaCadastro = () => {
    telaCadastro.style.display = 'none'
    body.classList.remove('active')
}

const mostrarTelaCadastro = () => {
    telaCadastro.style.display = 'flex'
    body.classList.toggle('active')
}

const inserirDadosNaTabela = (nome, email, numero, cidade) => {
    let linhaComDados = document.createElement('tr')
    linhaComDados.innerHTML = `
        <td class="nome">${nome}</td>
        <td>${email}</td>
        <td>${numero}</td>
        <td>${cidade}</td>
        <td class="acao">
            <button class="editar">
                Editar
                <span class="material-icons">
                    edit
                </span>   
            </button>

            <button class="remover-cliente">
                Remover
                <span class="material-icons">
                    highlight_off
                </span>
            </button>
        </td>
    `

    tabela.appendChild(linhaComDados)
    fecharTelaCadastro()
}

const pegarDados = () => {
    let inputs = document.querySelectorAll('input')
    let nome = document.querySelector('#nome').value
    let email = document.querySelector('#email').value
    let numero = document.querySelector('#numero').value
    let cidade = document.querySelector('#cidade').value


    inserirDadosNaTabela(nome, email, numero, cidade)

    inputs.forEach(input => {
        input.value = ''
    })

}

const atualizarCadastro = (evento) =>{
    let inputs = document.querySelectorAll('input')
    let nome = document.querySelector('#nome').value
    let email = document.querySelector('#email').value
    let numero = document.querySelector('#numero').value
    let cidade = document.querySelector('#cidade').value

    inputs.forEach(input => {
        input.value = ''
    })

    evento.target
    .innerHTML = `Olá`
}


//eventos
btnAbrirCadastro.addEventListener('click', mostrarTelaCadastro)

btnFecharTelaCadastro.addEventListener('click', fecharTelaCadastro)

btnCadastrar.addEventListener('click', pegarDados)

//remover cadastrado
tabela.addEventListener('click' , (evento) =>{
    if(evento.target.classList== 'remover-cliente' ){
        let elementoClicado = evento.target
        elementoClicado.parentNode.parentNode.remove()
    }
})

//editar cadastrado
tabela.addEventListener('click' , (evento) =>{
    if(evento.target.classList== 'editar' ){
        mostrarTelaCadastro()
        btnCadastrar.textContent ='Atualizar cadastro'
        btnCadastrar.removeEventListener('click', pegarDados)
        btnCadastrar.addEventListener('click' , atualizarCadastro)

    }
})