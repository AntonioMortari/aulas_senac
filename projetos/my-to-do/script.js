
let input = document.getElementById('input')
let pai = document.getElementById('conteiner')
let leg = document.getElementById('leg')
let body = document.getElementById('body')
let removeAll = document.getElementById('remove-all')
let childs = pai.childElementCount

removeAll.style.display = 'none'

//criar tarefa

const addTask = (nametask) =>{
    leg.remove()
    let label = document.createElement('label')
    label.classList.add('task')
    label.innerHTML = `
    <div class="task-text">${nametask}</div>
    <div class="buttons">
        <button class="btn check-btn">
            <i class="bi bi-check"></i>
        </button>
        <button class="btn remove-btn">
            <i class="bi bi-x"></i>
        </button>
    </div>
    `
    pai.appendChild(label)
    taskVerification()
}

//remover tarfa
const removeTask = (event) =>{
    let item = event.target.closest('.task')
    item.remove()
    taskVerification()

}

//checar tarefa
const checkedTask = (event) =>{
    let checked = event.target.parentNode.parentNode.parentNode
    checked.classList.toggle('taskChecked')
}

//verificar quantidade de tarefas
const taskVerification = () => {
    let labels = document.querySelectorAll('#conteiner label')
    if(labels.length > 0){
        removeAll.style.display = 'block'
    }else{
        removeAll.style.display = 'none'
    }
}



input.addEventListener('keydown' ,(event) => {
    if(event.key == 'Enter'){
        if(input.value.length == 0 ){
            alert('Digite uma tarefa!!!')
        }else{
            addTask(input.value)
            input.value = ''
        }
    }
})

pai.addEventListener('click' , (event) =>{
    if(event.target.closest('.remove-btn')){
        removeTask(event)
    }

    if(event.target.closest('.check-btn')){
        checkedTask(event)
    }
})

removeAll.addEventListener('click' ,() =>{
    let labels = document.querySelectorAll('#conteiner label')
    labels.forEach((label) =>{
        label.remove()
        taskVerification()
    })
})





