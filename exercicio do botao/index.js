// Seleciona o boneco e o botão
const boneco = document.querySelector('.boneco');
const botao = document.getElementById('animarBoneco');

// Adiciona um evento de clique no botão para ativar a animação
botao.addEventListener('click', function() {
    boneco.classList.toggle('animar');
});
