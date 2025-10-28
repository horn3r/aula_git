var prompt = require('prompt-sync')();

const lampada = {
    taAcessa: false,
    estaAcessa: function(){
        if(this.taAcessa === true){
            return `Tá acessa mísera`
}else{
    return `Tá desligada lobato, miseravi!`
}
    }
}
console.log(lampada.estaAcessa())
