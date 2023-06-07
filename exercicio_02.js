/*
  Todos os atributos necessários. Assim, usando Try e Catch, trate os erros e apresente uma mensagem quando houve atributos vazios.
*/

class MeuErro extends Error {
  constructor(message){
    super(message);
    this.name = "Meu Erro";
  }
}

class Estudante {
  constructor(nome, idade, turma) {
    this.nome = nome;
    this.idade = idade;
    this.turma = turma;
  }

  mostrarAtributos() {
    try {
      return this.atributos();
  } catch (erro){
      console.log(erro.stack)
  }
  }

  atributos(){
    if (this.nome != "" && this.idade != "" && this.turma != ""){
      return {
        nome: this.nome,
        idade: this.idade,
        especie: this.turma
      } 
    }else {
        throw new Error("Está faltando nome, idade e turma :)")
    }
  }
}

const estudante = new Estudante("João", 16, "");

const atributos = estudante.mostrarAtributos();

//console.log(atributos.nome);   
//console.log(atributos.idade);  
//console.log(atributos.turma); 

