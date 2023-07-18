'use strict'
import {funcoesIMC, funcoesErro} from "./utilies.js"

let inputPeso = document.querySelector('#peso')
let inputAltura = document.querySelector('#altura')
let btnCalcular = document.querySelector('#btn-calcular')

btnCalcular.onclick = (e) =>{
    e.preventDefault()
    
    let peso = inputPeso.value
    let altura = inputAltura.value

    if(!peso || !altura){
        funcoesErro.mostrarErro()
        return
    }

    let imc = funcoesIMC.calcularIMC(peso,altura)
    
    funcoesIMC.zerarInputs()

    funcoesIMC.mostrarIMC(imc)
}