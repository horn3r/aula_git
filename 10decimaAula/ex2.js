const gato = {
    nome: 'Fumaça',
    idade: 9,
    raca: 'Mainecoon',
    alergia: 'Ração comum',
    id: 1220,
    protocolo: 'Apenas banho e tosa',
    abandonado: 'Não',
    temFome: false,
    validarFelicidade: function(){
    if(this.temFome === false){
        return `O Gato está felizão!! xD`
    }else{
        return `O Gato está aos prantos !! :E`
    }
    },
    validarIdade: function (){
        if(this.idade >= 10)
            return `${this.nome}. tá véi podi`
        if(this.idade < 10)
            return `${this.nome}, tá novin, tá chei di saúde`
    }, 
    aumentarIdade: function (){
        return this.idade++
    }

}
console.log(gato);
console.log(gato.validarIdade());
gato.aumentarIdade
gato.aumentarIdade
console.log(gato.validarIdade())
