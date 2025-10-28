var prompt = require('prompt-sync')();

const n1 = Number (prompt ("Digite seu número:"))
const n2 = Number (prompt("Digite mais um número:"))

const div = n1 / n2
const mult = n1 * n2
const sub = n1 - n2
const soma = n1 + n2
console.log(soma)
console.log(sub)
console.log(mult)
console.log(div)