//Menu fixo// 
window.addEventListener('scroll', function(){
    var header = document.getElementById('section1-header')
    header.classList.toggle('hscroll' , window.scrollY > 0)
})

//Menu hamburguer

var btn = document.getElementById('btn-open')
var header = document.getElementById('section1-header')

function toggleMenu(){
    var menuM = document.getElementById('menu-mobile')
    menuM.classList.toggle('active')
    if(menuM.classList.contains('active')){
        btn.src = 'img/botao-fechar.png'
        header.style.padding = '18px 0px'
        header.style.borderBottom = '3px solid #003129'
    }else{
        btn.src = 'img/cardapio.png'
        header.style.padding = '10px'
        header.style.borderBottom = 'none'
    }
}

btn.addEventListener('click', toggleMenu)

