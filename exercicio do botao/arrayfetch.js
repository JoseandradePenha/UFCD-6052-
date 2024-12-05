// Função para buscar dados de uma API pública
function fetchDados() {
    const url = 'https://jsonplaceholder.typicode.com/users'; // API pública para exemplo
    
    // Fazendo a requisição com fetch()
    fetch(url)
        .then(response => {
            // Verifica se a resposta foi bem sucedida (status 200-299)
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }
            // Converte a resposta para JSON
            return response.json();
        })
        .then(dados => {
            // Função para exibir os dados na página
            exibirDados(dados);
        })
        .catch(error => {
            // Exibe o erro no console se a requisição falhar
            console.error('Erro ao buscar dados:', error);
        });
}

// Função para exibir os dados na página HTML
function exibirDados(dados) {
    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = ''; // Limpa os resultados anteriores

    dados.forEach(user => {
        // Criar um novo parágrafo para cada usuário
        const userInfo = document.createElement('p');
        userInfo.innerHTML = `<strong>Nome:</strong> ${user.name}, <strong>Email:</strong> ${user.email}, <strong>Cidade:</strong> ${user.address.city}`;
        resultadosDiv.appendChild(userInfo);
    });
}

// Adicionar evento ao botão para carregar os dados ao clicar
document.getElementById("loadData").addEventListener("click", fetchDados);
