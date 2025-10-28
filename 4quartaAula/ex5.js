var prompt = require('prompt-sync')();
const nu = +prompt("Digite um valor em reais: ")
const cota = +prompt("Digite o valor da cotaçãpo seu pobrekkkk: ")
const calcule = nu / cota 
if (cota <= 0) {
    console.log("Cotação inválida")
}else {
    console.log(calcule);
    
}