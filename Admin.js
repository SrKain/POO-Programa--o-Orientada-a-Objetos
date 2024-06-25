// importação de módulo
import User from "./User.js";


// usando herança de classe
class Admin extends User {
    // keyword EXTENDS se refere a extende-se de, ou seja, o Admin, se estende de User, o que faz com que haja a reciclagem de código e a não repetição de lógica, já que os niveis hierarquicos do código vão apenas adicionando lógica, métodos e paramêtros.
  constructor(nome, email, role) {
    // keyword SUPER é a forma de adicionar o constructor da classe que vai ser herdada.
    super(nome, email, role || 'admin');
  }
}

const newAdmin = new Admin("kauan", "k@k.com");

console.log(newAdmin);
// Recebimento do método através da herança de classes
console.log(newAdmin.Exibir());
