// Sorteia um número entre 00 e 99
const numeroSecreto = Math.floor(Math.random() * 100);
let tentativasRestantes = 5;

document.getElementById('submitGuess').addEventListener('click', function() {
    const palpite = parseInt(document.getElementById('guessInput').value);
    const message = document.getElementById('message');
    const attempts = document.getElementById('attempts');

    if (isNaN(palpite) || palpite < 0 || palpite > 99) {
        message.textContent = "Por favor, insira um número válido entre 00 e 99!";
        return;
    }

    tentativasRestantes--;

    if (palpite === numeroSecreto) {
        message.textContent = `Parabéns! Você acertou! O número era ${numeroSecreto}.`;
        document.getElementById('submitGuess').disabled = true; // Desativa o botão após vitória
    } else if (tentativasRestantes === 0) {
        message.textContent = `Lozer! Você perdeu. O número era ${numeroSecreto}.`;
        document.getElementById('submitGuess').disabled = true; // Desativa o botão após perder
    } else {
        message.textContent = `Errado! Tente novamente.`;
        attempts.textContent = `Tentativas restantes: ${tentativasRestantes}`;
    }
});
