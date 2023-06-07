//imc = peso * (altura*altura)
function imc(){
var name = document.getElementById('name').value
var txtaltura = document.getElementById('altura')
var txtpeso = document.getElementById('peso')
var res = document.getElementById('res')

var altura = Number(txtaltura.value)
var peso = Number(txtpeso.value)

imc = peso/(altura*altura)

if (imc < 18.5){
    var cla = "Magreza"
}else{
    if (imc >= 18.5 && imc <= 24.9){
        var cla = "Normal"
    }else{
        if (imc >= 25 && imc <= 29.9 ){
            var cla = "Sobrepeso"
        }else{
            if (imc >= 30 && imc <=34.9){
                var cla = "Obesidade grau 1"
            }else{
                if (imc >= 35 && imc <=39.9){
                    var cla = "Obesidade grau 2"
                }else{
                    if (imc > 40){
                        var cla = "Obesidade grau 3 (severa)"
                    }
                }
            }
        }
    }
}

if(altura <=0){
    window.alert('Valor invalido para a altura')
}

res.innerHTML = `${name} Seu IMC é ${imc.toFixed(2)}, sua classificação é : ${cla}`

}

var lista = []

lista[0] = "Fabio"
lista[1] = "João"
lista[2] = "Maria"
lista[3] = "Ana"
v
function menuh(){
    document.getElementById("links").style.display = "flex"
    document.getElementById("btnmenu").style.display = "none"
    document.getElementById('btnclose').style.display = 'block'   
}

function closemenu(){
    document.getElementById('links').style.display = 'none'
    document.getElementById('btnclose').style.display = 'none'
    if(window.innerWidth < 900){
        document.getElementById('btnmenu').style.display = 'block'
    }else{
        document.getElementById('btnmenu').style.display = 'none'
        document.getElementById('links').style.display = 'block'
    }
}
var datetoday = new Date()
var data = document.getElementById('data')
var hora = document.getElementById('hora')

    
    data.innerHTML = 'Hoje é dia '+ datetoday.getDate()
    hora.innerHTML = datetoday.getHours() + ":" + datetoday.getMinutes() + ":" + datetoday.getSeconds()



