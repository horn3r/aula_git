var prompt = require('prompt-sync')();
const larg = +prompt("Digite a largura: ")
const alt =  +prompt("Digite a altura: ")
if (larg <= 0 || alt <= 0) {
    console.log("Erro:")
}else {
    console.log(larg * alt)
}
