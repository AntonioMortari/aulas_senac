"use strict";
// tipos básicos
const idade = 18;
const nome = 'Antonio';
const estuda = true;
const filmesFavoritos = ['filme1', 'filme2', 'filme3'];
// tupla
const tupla1 = [0, ''];
// enums
var Cores;
(function (Cores) {
    Cores[Cores["Vermelho"] = 0] = "Vermelho";
    Cores[Cores["Azul"] = 1] = "Azul";
    Cores[Cores["Laranja"] = 2] = "Laranja";
    Cores[Cores["Rosa"] = 3] = "Rosa";
    Cores[Cores["Preto"] = 4] = "Preto";
})(Cores || (Cores = {}));
const corFav = Cores.Preto;
console.log(corFav); //4
// intersections
const productId = '';
