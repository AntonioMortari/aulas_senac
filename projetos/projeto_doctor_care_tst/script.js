//Menu fixo// 
window.addEventListener('scroll', function(){
    var header = document.getElementById('section1-header')
    header.classList.toggle('hscroll' , window.scrollY > 0)
})

//Menu hamburguer