function gerarMensagem(nome,hora) {
    if(hora < 12){
        return 'Bom dia'
    }else if(hora >= 12 && hora <= 18){
        return'Boa tarde'
    }else{
        return'Boa noite'
    }

}
console.log(gerarMensagem(10));