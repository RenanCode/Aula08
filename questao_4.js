class Aluno {
    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.primeiraNota = primeiraNota;
        this.segundaNota = segundaNota;
    }

    nomeAluno(primeiroNome, segundoNome) {
        return nomeCompleto = primeiroNome + segundoNome;
    }

    media = mediaAluno(primeiraNota, segundaNota){
    return media = (primeiraNota * 0.6) + (segundaNota * 0, 4);
}

situacaoAluno(){
    if (media > 6) {
        alert("Aluno aprovado !");
    }
    else {
        alert("Aluno reprovado !");
    }
}


var al_1 = new Aluno("Renan", "Costa", 10, 8);
var al_2 = new Aluno("Gustavo", "Peleje", 5, 5);
var al_3 = new Aluno("Jader", "Thome", 8, 8);
var al_4 = new Aluno("Rafael", "Serra", 7, 7);
var al_5 = new Aluno("Julio", "Henrique", 5, 5);

alert("O nome do objeto al_1 é:".al_1.nomeAluno);
var alunos = new Array();
var alunos = [al_1, al_2, al_3, al_4, al_5];
document.getElementById("demo").innerHTML = alunos;

var media_global = media();

exibir_al1(al_1){
    return console.log("Meu objeto : " + al_1);
}
