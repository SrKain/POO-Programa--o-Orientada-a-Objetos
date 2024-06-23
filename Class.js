// definição de classe para construção de objetos.
class User {
  constructor(nome, email, role, ativo = true) {
    this.nome = nome;
    this.email = email;
    this.role = role || "estudante";
    this.ativo = ativo;
  }
  exibirInfo() {
    return `${(this.nome, this.email)}`;
  }
}

// criação de um novo objeto usando a estrutura de classes
const NewUser = new User("kauan", "k@k.com");
console.log(NewUser);
console.log(NewUser.exibirInfo());
