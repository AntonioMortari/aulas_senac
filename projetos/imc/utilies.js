let inputPeso = document.querySelector('#peso')
let inputAltura = document.querySelector('#altura')
let mensagemErro = document.querySelector('#mensagem-erro')

//elementos popup
const popup = {
    conteinerPopup:document.querySelector('#conteiner-popup'),
    mensagem:document.querySelector('#conteiner-popup h2'),
    btnFechar:document.querySelector('#conteiner-popup #btn-fechar')
}

//FUNCÕES IMC
const calcularIMC = (p,a) => p / (a*a)

const zerarInputs = () =>{
    inputPeso.value = ''
    inputAltura.value = ''
}

const mostrarIMC = (imc) =>{
    popup.mensagem.textContent = `Seu IMC é ${imc.toFixed(2)}`
    popup.conteinerPopup.classList.add('open')
    
    popup.btnFechar.onclick = fecharPopup
    document.addEventListener('keydown' ,(e) => e.key == 'Escape' ? fecharPopup() : true) 
}

const fecharPopup = () => popup.conteinerPopup.classList.remove('open')


//FUNÇÕES ERRO
const mostrarErro = () =>{
    mensagemErro.classList.add('open')
    
    inputPeso.oninput = fecharErro
    inputAltura.oninput = fecharErro
}
const fecharErro = () => mensagemErro.classList.remove('open') 

//EXPORTAÇÕES
export const funcoesIMC = {
    calcularIMC:calcularIMC,
    zerarInputs:zerarInputs,
    mostrarIMC:mostrarIMC
}

export const funcoesErro = {
    mostrarErro:mostrarErro
}




