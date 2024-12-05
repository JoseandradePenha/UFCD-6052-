// Array com as informações das pessoas
let pessoas = [
   {
       nome: "José Alves",
       idade: 49,
       data_nascimento: { dia: 10, mes: 9, ano: 1975 }
   },
   {
       nome: "Armanda Rodrigues",
       idade: 46,
       data_nascimento: { dia: 9, mes: 6, ano: 1978 }
   },
   {
       nome: "Margarida Alves",
       idade: 12,
       data_nascimento: { dia: 3, mes: 3, ano: 2012 }
   },
   {
       nome: "Sofia Alves",
       idade: 7,
       data_nascimento: { dia: 4, mes: 9, ano: 2017 }
   }
];

// Função para validar a idade com base na data de nascimento
function validarIdade(pessoa) {
   let ano_atual = new Date().getFullYear();
   let idade_calculada = ano_atual - pessoa.data_nascimento.ano;

   // Verifica se o mês e o dia já passaram neste ano
   let mes_atual = new Date().getMonth() + 1; // Os meses em JavaScript começam de 0
   let dia_atual = new Date().getDate();

   if (mes_atual < pessoa.data_nascimento.mes || (mes_atual === pessoa.data_nascimento.mes && dia_atual < pessoa.data_nascimento.dia)) {
       idade_calculada--; // Se ainda não fez anos este ano, subtrai 1 à idade calculada
   }

   // Validação: verifica se a idade calculada corresponde à idade dada
   return idade_calculada === pessoa.idade ? "Idade correta" : "Idade incorreta";
}

// Função para exibir os dados e resultados de validação na página HTML
function exibirResultados() {
   let resultadosDiv = document.getElementById("resultados");

   // Limpa o conteúdo anterior do `resultadosDiv` para evitar acúmulo de texto
   resultadosDiv.innerHTML = "";

   // Percorrer o array de pessoas e exibir os resultados
   pessoas.forEach(pessoa => {
       let resultado = validarIdade(pessoa);
       
       // Cria elementos DOM diretamente em vez de usar innerHTML com strings concatenadas
       let pessoaInfo = document.createElement("div");
       pessoaInfo.innerHTML = `
           <p><strong>Nome:</strong> ${pessoa.nome}</p>
           <p><strong>Idade:</strong> ${pessoa.idade}</p>
           <p><strong>Data de Nascimento:</strong> ${pessoa.data_nascimento.dia}-${pessoa.data_nascimento.mes}-${pessoa.data_nascimento.ano}</p>
           <p><strong>Validação:</strong> ${resultado}</p>
           <hr>
       `;

       resultadosDiv.appendChild(pessoaInfo);
   });
}

// Chama a função para exibir os resultados ao carregar a página
window.onload = exibirResultados;
