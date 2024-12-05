// Criar o objeto pessoa com os dados de José Alves
let pessoa = {
  nome: "José Alves",
  idade: 49,
  data_nascimento: {
      dia: 10,
      mes: 9,
      ano: 1975
  },
  validar_idade: function() {
      let ano_atual = new Date().getFullYear();
      let idade_calculada = ano_atual - this.data_nascimento.ano;

      // Valida se a idade corresponde ao ano de nascimento
      if (idade_calculada === this.idade) {
          return "A idade está correta!";
      } else {
          return "A idade não corresponde ao ano de nascimento.";
      }
  }
};

// Exibir os dados na página HTML
document.getElementById("nome").innerHTML = "Nome: " + pessoa.nome;
document.getElementById("idade").innerHTML = "Idade: " + pessoa.idade;
document.getElementById("data_nascimento").innerHTML = "Data de Nascimento: " + pessoa.data_nascimento.dia + "-" + pessoa.data_nascimento.mes + "-" + pessoa.data_nascimento.ano;
document.getElementById("validacao").innerHTML = pessoa.validar_idade();
