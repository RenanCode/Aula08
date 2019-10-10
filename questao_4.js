class Aluno{
    constructor(nome_aluno,n1,n2){
        this.nome_aluno = nome_aluno;
        this.n1 = n2;
        this.n2 = n2;
    }

    multiplicacao(n1,n2) {
        a = this.n1*0.6;
        b = this.n2*0.4;
        c = a + b;
        return a,b,c;
      }

}
var aluno = new Aluno("João da Silva",7,8.5);
var v1 = multiplicacao(aluno.n1,aluno.n2);

alert("O nome do aluno é: ");