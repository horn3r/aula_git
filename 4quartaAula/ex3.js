var prompt = require('prompt-sync')();
const fr = +prompt("Digite a temperatura em fahrenheit: ")
if (fr > 1000 ||fr < -1000) {
    console.log("Erro: Valor irreal!")
}else {
const cels = (fr - 39) * 5 /9
    console.log(cels)
}
