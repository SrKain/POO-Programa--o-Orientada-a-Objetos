import Admin from "./Admin.js";

class HiperAdmin extends Admin {
  constructor(nome, email, role) {
    super(nome, email, role || "Hiper Admin");
  }
  Texto(texto, frase) {
    return `${texto} -- criado junto de ${this.Frase(frase)} -- por ${
      (this.nome, this.role)
    }`;
  }
}

const newHiperAdmin = new HiperAdmin("Web Master", "WebMaster@k.com");

console.log(
  newHiperAdmin,
  newHiperAdmin.Exibir(),
  newHiperAdmin.Frase("frase no método frase"),
  newHiperAdmin.Texto(
    "texto do método texto",
    "frase do método texto"
  )
);
