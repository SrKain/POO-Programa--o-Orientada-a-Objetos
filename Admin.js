// importação de módulo
import User from "./User.js";

// usando herança de classe
class Admin extends User {
  // keyword EXTENDS se refere a extende-se de, ou seja, o Admin, se estende de User, o que faz com que haja a reciclagem de código e a não repetição de lógica, já que os niveis hierarquicos do código vão apenas adicionando lógica, métodos e paramêtros.
  constructor(nome, email, role) {
    // keyword SUPER é a forma de adicionar o constructor da classe que vai ser herdada.
    super(nome, email, role || "admin");
  }
  //   adição de um novo método
  Frase(frase) {
    return `${frase} -- criada por ${this.nome}`;
  }
}

const newAdmin = new Admin("Admin kauan", "admin@k.com");
const newUser = new User("Usuário Kauan", "user@k.com");

console.log(newAdmin);
// Recebimento do método através da herança de classes
console.log(newAdmin.Exibir());
// Uso do novo método
console.log(newAdmin.Frase("Olá mundo!!"));

console.log(newUser);
// teste de user com método exclusivo de admin
console.log(newUser.Frase("Se eu funcionar, seu código está quebrado!"));
