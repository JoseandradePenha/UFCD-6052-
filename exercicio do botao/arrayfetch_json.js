// Exemplo de dados em formato JSON
const pessoasJSON = `
[
    {
        "nome": "José Alves",
        "idade": 49,
        "cidade": "Lisboa"
    },
    {
        "nome": "Armanda Rodrigues",
        "idade": 46,
        "cidade": "Porto"
    },
    {
        "nome": "Margarida Alves",
        "idade": 12,
        "cidade": "Coimbra"
    },
    {
        "nome": "Sofia Alves",
        "idade": 7,
        "cidade": "Faro"
    }
]
`;

// Converter JSON para um objeto JavaScript
const pessoas = JSON.parse(pessoasJSON);

// Função para exibir os dados na página HTML
function exibirDados() {
    const resultadosDiv = document.getElementById("resultados");

    pessoas.forEach(pessoa => {
        // Criar um novo parágrafo para cada pessoa
        const pessoaInfo = document.createElement('p');
        pessoaInfo.innerHTML = `<strong>Nome:</strong> ${pessoa.nome}, <strong>Idade:</strong> ${pessoa.idade}, <strong>Cidade:</strong> ${pessoa.cidade}`;
        resultadosDiv.appendChild(pessoaInfo);
    });
}

// Chama a função ao carregar a página
window.onload = exibirDados;
