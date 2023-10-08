import ContaBancaria from "./ContaBancaria";

const minhaConta = new ContaBancaria('Antonio', 'cp')

minhaConta.consultarSaldo()

minhaConta.depositar(200)

minhaConta.sacar(100)

minhaConta.sacar(10000)


minhaConta.consultarSaldo()
