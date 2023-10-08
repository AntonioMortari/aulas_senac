
// tipos básicos

const idade : number = 18
const nome :string = 'Antonio'
const estuda: boolean = true
const filmesFavoritos : string[] = ['filme1', 'filme2', 'filme3']

// tupla
const tupla1 : [number, string ] = [0,'']

// enums
enum Cores{
    Vermelho,
    Azul,
    Laranja,
    Rosa,
    Preto
}

const corFav = Cores.Preto

console.log(corFav) //4

// intersections
const productId: string | number = ''
