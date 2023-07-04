'use strict';

let btn = document.querySelector('#btn')

let tentativas = 0

const comecarJogo = () =>{
    let numero = Math.round(Math.random() * (10-1) + 1)
    // let numero = 2
    tentativas = 3
    if(confirm('Deseja começar o jogo?')){
        alert(`Advinhe o número que foi gerado aleatóriamente, você tem 3 tentativas
        DICA: O número está entre 1 e 10
        `)
        while(tentativas >0){
            if(prompt('ADVINHE O NÚMERO') == numero){
                alert('Você acertou Parabéns! Se quiser jogar denovo clique em Começar.')
                return
            }else{
                tentativas--
                if(tentativas == 0){
                    alert(`Você perdeu :(, o número era ${numero} mas se quiser jogar novamente é só clicar em começar!`)
                    return
                }
                alert(`Você errou :(, Mas ainda restam ${tentativas} tentativas)`)
            }
        }
    }else{
        alert('Ok, quando quiser começar é só clicar no botão "Começar" :)')
    }
        
}

btn.addEventListener('click', comecarJogo)