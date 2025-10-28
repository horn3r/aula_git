var prompt = require('prompt-sync')();
const n1 = +prompt('Numero 1: ')
const n2 = +prompt('Numero 2: ')

let escolha
while (true) {
    escolha  =  prompt('Escolha entre + - * /: ')
    if(escolha == "+"){
        console.log(n1 + n2);
        continue
    }else if(escolha == "-"){
        console.log(n1 - n2);
        continue
    }else if(escolha == "/"){
        console.log(n1 / n2);
        continue
    }else if(escolha == "*"){
        console.log(n1 *  n2);
        continue
    }else{
        break
    }

} 
