let menu = document.querySelector('#nav')
let btnMenu = document.querySelector('#btn-menu')

const toggleMenu = () =>{
    btnMenu.classList.toggle('fa-bars')
    btnMenu.classList.toggle('fa-xmark')

    menu.classList.toggle('ativo')

}

btnMenu.addEventListener('click', toggleMenu)