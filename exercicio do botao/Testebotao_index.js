// Seleciona os elementos da página
const contador = document.getElementById('contador');
const incrementButton = document.getElementById('incrementButton');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

let numero = 0;     // Número inicial
let intervalo = null; // Para guardar o intervalo de contagem

// Função para atualizar o número no contador com 9 dígitos
function atualizarContador() {
    contador.textContent = numero.toString().padStart(9, '0');
}

// Evento para o botão de contagem manual (botão vermelho)
incrementButton.addEventListener('click', function() {
    if (numero < 999999999) { // Garante que não passa de 999.999.999
        numero++;
        atualizarContador();
    }
});

// Evento para o botão "Start"
startButton.addEventListener('click', function() {
    // Verifica se já existe um intervalo a correr
    if (!intervalo) {
        intervalo = setInterval(() => {
            if (numero < 999999999) {
                numero++;
                atualizarContador();
            } else {
                clearInterval(intervalo); // Pára o intervalo se atingir o máximo
                intervalo = null; // Liberta a variável para permitir reiniciar
            }
        }, 1000); // Incrementa a cada segundo
    }
});

// Evento para o botão "Stop"
stopButton.addEventListener('click', function() {
    if (intervalo) {
        clearInterval(intervalo); // Pára o intervalo
        intervalo = null; // Liberta a variável intervalo
    }
});
