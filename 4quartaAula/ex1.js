var prompt = require('prompt-sync')();
const numero = +prompt("Digite um número: ")
const s = numero * 3600
if (numero < 0) {
    console.log("Erro: insira um número válido.")
}else { 
    console.log(s)
}