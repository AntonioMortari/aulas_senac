let btn = document.querySelector('#mode_icon')
let body = document.getElementById('b')

const darkmode = () =>{
    body.classList.toggle('darkmode')
}

btn.addEventListener('click' , darkmode)