let time = 2000, //tempo do setniterval
    currentImageIndex = 0,
    images = document.querySelectorAll('#slider img'), //retorna vetor com as imagens
    max = images.lenght // = 4

    console.log(images)
    
    function nextImage(){ //função pra trocar imagem

    }

    function start(){
        console.log('window.loaded')
        setInterval(function(){
            console.log('troca d imagem')
        }, time)
    }

    window.addEventListener('load', start) //load (quando a tela carregar)