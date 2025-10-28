var prompt = require('prompt-sync')();

const em = ('gabrielhornerfloor@gmail.com');
const senhaC = 10021001;
let emD = prompt('Qual é o email?: ');
let senhaD = +prompt('Qual a senha?: ')
while(emD !== em || senhaD !== senhaC){
    console.log('Senha ou usuário incorreto, tente novamente: ');
    emD= prompt('Qual é o email?: ');
    senhaD= +prompt('Qual a senha?: ')

}
console.log('Login bem sucedido!')
