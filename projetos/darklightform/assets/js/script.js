
// darkmode
let btn = document.querySelector('#mode_icon')
let body = document.getElementById('b')

const darkmode = () =>{
    body.classList.toggle('active')
}

btn.addEventListener('click' , darkmode)


//password button

let btn_view =document.querySelector('#eyeview')

btn_view.addEventListener('click