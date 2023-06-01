//script_darkmode

var body = document.getElementById('body')
var btnlight = document.getElementById('btnlight')
var btndark = document.getElementById('btndark')

function mudarD(){
    body.classList.add('darkmode')
}

function mudarL(){
    body.classList.remove('darkmode')
}

function mudar(){
    body.classList.toggle('darkmode')
}

btnlight.addEventListener('click', mudarL)
btndark.addEventListener('click', mudarD)


var checkbox = document.getElementById('switch')

checkbox.addEventListener('change' ,mudar )