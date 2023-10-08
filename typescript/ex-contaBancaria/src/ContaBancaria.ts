

class ContaBancaria{
    private nome : string
    private tipo : string
    private saldo : number

    constructor(nome:string, tipo:string){
        this.nome = nome
        this.tipo = tipo
        // se o tipo for cp(conta poupança) recebe 150, se for conta corrente recebe 50
        this.saldo = tipo == 'cp' ? 150 : 50 
    }

    // função de consulta saldo, que retorna um número
    consultarSaldo():void{
        console.log(`O saldo da conta ${this.nome} é de R$${this.saldo}`)
    }

    depositar(valor:number):void{
        this.saldo = this.saldo + valor
        console.log(`O valor de R$${valor} foi adicionado na conta de ${this.nome} e o saldo atual é de: R$${this.saldo}`)
    }

    sacar(valor:number):void{
        if(valor > this.saldo){
            console.log('Saldo insuficiente!')
        }else{
            this.saldo = this.saldo - valor
            console.log(`O valor de R$${valor} foi sacado da conta de ${this.nome} com sucesso! O saldo atual é de R$${this.saldo}`)
        }
    }
}

export default ContaBancaria