var porta = []
var aberta = 0
var fechada = 0
var c = 0

for (var c = 0 ; c<100 ; c++){
    porta[c]  = "Aberta"
    if(porta[c] == "Aberta"){
        aberta++
    }
}



for(var c = 1 ; c<100; c= c+1){
    if(porta[c] == "Aberta"){
        porta[c] ="Fechada"
        fechada++
        aberta--
    }else{
        if(porta[c] == "Fechada"){
            porta[c] = "Aberta"
            aberta++
            fechada--
        }
    }
}



for(var c = 1 ; c<100; c= c+10){
    if(porta[c] == "Aberta"){
        porta[c] ="Fechada"
        fechada++
        aberta--
    }else{
        if(porta[c] == "Fechada"){
            porta[c] = "Aberta"
            aberta++ 
            fechada--
        }
    }
}



for(var c = 1 ; c<100; c= c+1){
    if(porta[c] == "Aberta"){
        porta[c] ="Fechada"
        fechada++
        aberta--
    }else{
        if(porta[c] == "Fechada"){
            porta[c] = "Aberta"
            aberta++
            fechada--
        }
    }
}


console.log(aberta+ " Abertas")
console.log(fechada+ " Fechadas")
