var num = []
for (c  = 0 ; c<=10 ; c++ ){
    num.push(Math.random()*1000)
    num[c].toFixed(0)
}

for(c = 1 ; c<num.length ; c++){
    if(num[c]%2 == 0){
        console.log(`${num[c]} é par`)
    }else{
        console.log(`${num[c]} é ímpar`)
    }
}