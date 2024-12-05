// Vetor (array) de caracteres representando o nome "José Alves"
let nome = ['J', 'o', 's', 'é', ' ', 'A', 'l', 'v', 'e', 's'];

// Função para exibir os caracteres
function mostrarCaracteres() {
    // Obtém o elemento onde os caracteres serão exibidos
    let resultado = document.getElementById("resultado");

    // Limpa o conteúdo existente
    resultado.innerHTML = '';

    // Percorre o vetor de caracteres e exibe cada um deles
    for (let i = 0; i < nome.length; i++) {
        resultado.innerHTML += "Posição " + i + ": '" + nome[i] + "'<br>";
    }
}
