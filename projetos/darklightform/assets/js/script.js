
// darkmode + trocar botao
let btn = document.querySelector('#mode_icon')
let body = document.getElementById('b')


const darkmode = () =>{
    body.classList.toggle('active')
    btn.classList.toggle('fa-moon')
    btn.classList.toggle('fa-sun')
}

btn.addEventListener('click' , darkmode)


//password button

let btn_view =document.querySelector('#eyeview')
let input_password = document.querySelector('#password')

const slasheye = () =>{
    //trocar botão
    btn_view.classList.toggle('fa-eye')
    btn_view.classList.toggle('fa-eye-slash')

    //mostrar senha
    if(input_password.type == 'text'){
        input_password.type = 'password'
    }else{
        input_password.type = 'text'
    }
}

btn_view.addEventListener('click' , slasheye)