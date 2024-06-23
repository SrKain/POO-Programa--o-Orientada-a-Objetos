
// Usuário padrão
const user = {
    // ATRIBUTOS
    nome : 'Kauan',
    email: 'k@k.com.br',
    role: 'stud',
    ativo: true,
    // MÉTODO
    ExibirInfo: function(){
        console.log(this.nome, this.email)
    },
    // FUNCTION PARA EXIBIÇÃO DO MODELO COMPLETO
    ConsoleAll: function(){
        console.log(this);
    }
}

// usuário adminstrador 
const admin = {
    nome: 'jeff',
    email: 'j@j.com',
    role: 'admin',
    ativo: true,
    //MÉTODO
    CursoCriado: function(){
        console.log(`CURSO CRIADO POR:${this.nome}`);
    }
}

// uso de protótipo para herdar uma função de outro objeto
Object.setPrototypeOf(admin, user);


// chamadas para execução
admin.CursoCriado();
admin.ExibirInfo();
admin.ConsoleAll();