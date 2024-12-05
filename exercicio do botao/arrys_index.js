// Array com 20 idades (pode ser preenchido com números aleatórios ou fixos)
let idades = [23, 45, 34, 29, 50, 18, 22, 19, 30, 37,
    21, 25, 32, 46, 55, 60, 41, 33, 28, 40];

// Função para exibir as idades
function mostrarIdades() {
// Obtém o elemento onde as idades serão exibidas
let display = document.getElementById("lista-idades");

// Limpa qualquer conteúdo existente
display.innerHTML = '';

// Itera pelo array e cria uma lista de idades
for (let i = 0; i < idades.length; i++) {
display.innerHTML += "Posição " + i + ": " + idades[i] + " anos<br>";
}
}
