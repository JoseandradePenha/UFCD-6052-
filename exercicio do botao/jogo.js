const animals = [
    { name: 'cavalo', sound: 'assets/cavalo.mp3' },
    { name: 'gato', sound: 'assets/gato.mp3' },
    { name: 'cachorro', sound: 'assets/cachorro.mp3' },
    { name: 'vaca', sound: 'assets/vaca.mp3' },
    { name: 'ovelha', sound: 'assets/ovelha.mp3' }
];

let selectedAnimal = {};
let mistakes = 0;
const maxMistakes = 6;
let guessed = [];

const wordContainer = document.getElementById('word-container');
const keyboardContainer = document.getElementById('keyboard-container');
const hangmanImage = document.getElementById('hangman-image');
const message = document.getElementById('message');
const animalSound = document.getElementById('animal-sound');

// Inicializa o jogo
function startGame() {
    selectedAnimal = animals[Math.floor(Math.random() * animals.length)];
    mistakes = 0;
    guessed = [];
    updateHangmanImage();
    displayWord();
    createKeyboard();
    message.textContent = '';
}

// Exibe a palavra com espaços
function displayWord() {
    wordContainer.innerHTML = selectedAnimal.name
        .split('')
        .map(letter => (guessed.includes(letter) ? letter : '_'))
        .join(' ');
}

// Cria o teclado virtual
function createKeyboard() {
    keyboardContainer.innerHTML = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    alphabet.forEach(letter => {
        const button = document.createElement('button');
        button.textContent = letter;
        button.classList.add('key');
        button.addEventListener('click', () => handleGuess(letter, button));
        keyboardContainer.appendChild(button);
    });
}

// Manipula a escolha de uma letra
function handleGuess(letter, button) {
    button.disabled = true;
    button.classList.add('disabled');

    if (selectedAnimal.name.includes(letter)) {
        guessed.push(letter);
        displayWord();
        checkWin();
    } else {
        mistakes++;
        updateHangmanImage();
        checkLoss();
    }
}

// Atualiza a imagem do jogo da forca
function updateHangmanImage() {
    hangmanImage.src = `assets/hangman${mistakes}.png`;
}

// Verifica se o jogador ganhou
function checkWin() {
    if (!wordContainer.textContent.includes('_')) {
        message.textContent = 'Parabéns! Você acertou!';
        animalSound.src = selectedAnimal.sound;
        animalSound.play();
        disableAllKeys();
    }
}

// Verifica se o jogador perdeu
function checkLoss() {
    if (mistakes === maxMistakes) {
        message.textContent = `Você perdeu! A palavra era "${selectedAnimal.name}".`;
        disableAllKeys();
    }
}

// Desabilita todas as teclas
function disableAllKeys() {
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.disabled = true);
}

// Inicia o jogo quando a página é carregada
window.onload = startGame;
