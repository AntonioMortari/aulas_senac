const sum = (x:number, y:number):number =>{
    return x+y
}

console.log(sum(10,10))

// void -> função sem retorno

const showMessage = (message:string) : void =>{
    console.log(message)
}

showMessage('Olá, Mundo!')