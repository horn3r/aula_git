var prompt = require('prompt-sync')();

let somar = 0
for(let i = 0; i <= 200; i++){
    console.log(`i: ${i}`);
    somar = somar + i
    console.log(`Soma: ${somar}`);

}

