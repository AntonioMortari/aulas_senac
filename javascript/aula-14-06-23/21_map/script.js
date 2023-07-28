const produtos = [
    { 
        nome: 'notebook',
        preco: 1100
    },
    {
        nome: 'smartphone',
        preco: 400
    }
]

const numeros = [3,4,7,1,9,7]

const array = [
    { nome: '...', preco: 23.67, desconto: 0.2 },
    { nome: '...', preco: 120.99, desconto: 0.3 },
    { nome: '...', preco: 3567.67, desconto: 0.5 },
    { nome: '...', preco: 10.80, desconto: 0.1 },
    { nome: '...', preco: 7.42, desconto: 0.5 },
    { nome: '...', preco: 12355.33, desconto: 0.15 },

]

const itens = [
    { nome: '...', preco: 23.67, desconto: 0.2 },
    { nome: '...', preco: 120.99, desconto: 0.3 },
    { nome: '...', preco: 3567.67, desconto: 0.5 },
    { nome: '...', preco: 10.80, desconto: 0.1 },
    { nome: '...', preco: 7.42, desconto: 0.5 },
    { nome: '...', preco: 12355.33, desconto: 0.15 },
]

const precoEmReal = produtos.map(item =>{
    return item.preco *4.74
})

const numerosDobrados = numeros.map(num =>{
    return num*2
})

console.log(numerosDobrados)

console.log(precoEmReal)


const precoComDesconto = (produto) =>{
    return produto.preco - (produto.desconto*produto.preco)
}

console.log(array.map(precoComDesconto))

