"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ContaBancaria_1 = __importDefault(require("./ContaBancaria"));
const minhaConta = new ContaBancaria_1.default('Antonio', 'cp');
minhaConta.consultarSaldo();
minhaConta.depositar(200);
minhaConta.sacar(100);
minhaConta.sacar(10000);
minhaConta.consultarSaldo();
