// O que é destruturação
// A tecnica de desestruturação consiste em extrair
// dados de arrays e objetos

// 1o. exemplo

const usuario = {
    id: 1,
    nome: 'Felipe',
    email: 'contato@felipe.com',
    endereco: {
        cidade: 'Belo Horizonte',
        uf: 'MG'
    },
    salario:1320.89
}

const  {nome, email, endereco:{cidade}} = usuario
console.log(nome, email, cidade);

const numeros = [1,2,3,4,]

const [um,dois] = numeros

console.log(um,dois)