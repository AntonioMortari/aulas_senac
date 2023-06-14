var a = prompt("Valor do primeiro termo:");
var op1 = prompt("digite a op1");
var b = prompt("Valor do segundo termo:");
var op2 = prompt("digite a op2");
var c = prompt("Valor do terceiro termo:");

var na = parseInt(a);
var nb = parseInt(b);
var nc = parseInt(c);

var delta

if(op2 == "-"){
    delta = (nb*nb)-4*na*-1*nc;
}
else{
    delta = (nb*nb)-4*na*nc;
}
var x1
var x2
if(delta<0){
    console.log("Não existem raizes reais para a equação");
}
else{
    if(op1 == "-"){
        x1 = (-(nb*-1) + Math.sqrt(delta))/2*na;
        x2 = (-(nb*-1) - Math.sqrt(delta))/2*na;
        console.log("raiz 1:" + x1 + " raiz 2:"+ x2);
    }else{
        x1 = (-(nb) + Math.sqrt(delta))/2*na;
        x2 = (-(nb) - Math.sqrt(delta))/2*na;
        console.log("raiz 1:" + x1 + " raiz 2:"+ x2);
    }
}


