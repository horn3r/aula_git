var prompt = require('prompt-sync')();
const jant = +prompt("Digite o total do jantar: ")
const atend = prompt("O atendimento foi bom ou ruim?: ")
let calc = 0 
let gorjeta = 0

if (atend === 'bom') {
    gorjeta = jant * 0.10
    console.log(jant + gorjeta)
} else {
    console.log("Foi mal")
}