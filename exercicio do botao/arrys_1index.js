// Array de idades
let idades = [21, 33, 52, 32, 44, 49, 31, 40, 21, 33, 38, 19];

// Função para calcular a média das idades
function calcularMedia() {
    // Soma todas as idades
    let soma = 0;
    for (let i = 0; i < idades.length; i++) {
        soma += idades[i];
    }

    // Calcula a média
    let media = soma / idades.length;

    // Exibe o resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "A média das idades é: " + media.toFixed(2);
}
