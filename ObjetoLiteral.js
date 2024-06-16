const user = {
    // ATRIBUTOS
    nome : 'Kauan',
    email: 'k@k.com.br',
    nascimento: '22.05.2002',
    role: 'admin',
    ativo: true,
    // MÉTODO
    ExibirInfo: function(){
        console.log(this.nome, this.email)
    }
}
// chamada da function
user.ExibirInfo()

// Executando o THIS fora de contexto
const Exibir = function(){
    // deve retornar undefined, uma vez que não existe contexto
    console.log(this.nome)
}

// Executando o THIS agora forçado para dentro de algum contexto
// deve retornar o nome de qualquer objeto que possua algum atributo nome, usando bind para empurrar a função para dentro do contexto.
const ExibirNome = Exibir.bind(user)

// chamadas das funções
Exibir()
ExibirNome()