let time = 2000, //tempo do setniterval
    currentImageIndex = 0,
    images = document.querySelectorAll('#slider img'), //retorna vetor com as imagens
    max = images.lenght // = 4

    console.log(images)
    
    function nextImage(){ //função pra trocar imagem
        // images[currentImageIndex].classList.remove("selected", "animate__animated", "animate__fadeInLeft")
        images[currentImageIndex].classList.remove("selected")

        
        currentImageIndex++
        
        if(currentImageIndex >= images.length){
            currentImageIndex = 0
        }
        
        // images[currentImageIndex].classList.add("selected", "animate__animated", "animate__fadeInLeft")
        images[currentImageIndex].classList.add("selected")

    }

    function start(){
        console.log('window.loaded')
        setInterval(function(){
            nextImage()
        }, time)
    }

    window.addEventListener('load', start) //load (quando a tela carregar)