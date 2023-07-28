// Rest

// O rest, que do ingles significa resto, serve pra
// pegar o resto das informações de um objeto, array 

// Para utilizar o rest, vamos usar os '...' 3pontinhos...
// e um nome para definir onde vai ficar o resto que queremos pegar

const usuario = {
    id: 1,
    nome: 'Felipe',
    email: 'contato@felipe.com',
    endereco: {
        cidade: 'Belo Horizonte',
        uf: 'MG'
    },
    salario: 1320.89
}

const {nome,email, ...info} = usuario

console.log(nome)

console.log(info)
