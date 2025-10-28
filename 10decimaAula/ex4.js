var prompt = require('prompt-sync')();

const telefone = {
    tocar: true,
    chamar: function(){
        if(this.tocar === true){
            return `Trim trim`
        }else {
            return `Caixa postal: Deixe seu recado. Plin`
        }
    }

}
console.log(telefone.chamar())