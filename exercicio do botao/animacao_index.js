// Seleciona o cubo
const cubo = document.getElementById('cubo');
let mouseX = 0;
let mouseY = 0;

// Adiciona um evento de movimento do rato
document.addEventListener('mousemove', (e) => {
    // Calcula o movimento do rato
    mouseX = e.clientX / window.innerWidth * 360; // Movimento horizontal
    mouseY = e.clientY / window.innerHeight * 360; // Movimento vertical

    // Atualiza a rotação do cubo de acordo com a posição do rato
    cubo.style.transform = `rotateX(${mouseY}deg) rotateY(${mouseX}deg)`;
});
