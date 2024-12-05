let totalPessoas = 0;
const limitePessoas = 120;
let tempoInicio = null;

function adicionarPessoa() {
    const totalElement = document.getElementById('total-pessoas');
    const statusElement = document.getElementById('status');

    if (totalPessoas < limitePessoas) {
        totalPessoas++;
        totalElement.textContent = totalPessoas;
        statusElement.textContent = "Cliente entrou no restaurante.";
        statusElement.style.color = "green";

        // Se for o primeiro cliente, iniciar o cronómetro de espera
        if (totalPessoas === 1) {
            tempoInicio = new Date();
        }

    } else {
        statusElement.textContent = "O restaurante atingiu a capacidade máxima!";
        statusElement.style.color = "red";
    }
}

function removerPessoa() {
    const totalElement = document.getElementById('total-pessoas');
    const statusElement = document.getElementById('status');

    if (totalPessoas > 0) {
        totalPessoas--;
        totalElement.textContent = totalPessoas;
        statusElement.textContent = "Cliente saiu do restaurante.";
        statusElement.style.color = "blue";
    } else {
        statusElement.textContent = "O restaurante já está vazio.";
        statusElement.style.color = "orange";
    }
}

function calcularEspera() {
    const esperaElement = document.getElementById('tempo-espera');
    const statusElement = document.getElementById('status');

    if (totalPessoas >= limitePessoas && tempoInicio !== null) {
        let tempoAtual = new Date();
        let diferencaEmSegundos = Math.floor((tempoAtual - tempoInicio) / 1000);  // em segundos
        let minutos = Math.floor(diferencaEmSegundos / 60);
        let segundos = diferencaEmSegundos % 60;

        esperaElement.textContent = `Tempo de espera estimado: ${minutos} minutos e ${segundos} segundos.`;
        statusElement.textContent = "Tempo de espera calculado.";
        statusElement.style.color = "purple";
    } else {
        esperaElement.textContent = "Nenhum tempo de espera. Capacidade ainda disponível.";
        statusElement.textContent = "Capacidade ainda disponível.";
        statusElement.style.color = "green";
    }
}
