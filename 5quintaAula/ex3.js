var prompt = require('prompt-sync')();

const senhaC = ('Lavinia');
let senhaDigi= prompt('Qual é a senha?: ');
while(senhaDigi !== senhaC){
    console.log('Senha errada, tente novamente.');
    senhaDigi= prompt('Qual é a senha?: ');

}
console.log('Senha Correta!')
