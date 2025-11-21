// Base de datos de países con sus banderas
const countries = [
    { name: 'Argentina', flag: 'https://flagcdn.com/w320/ar.png' },
    { name: 'Brasil', flag: 'https://flagcdn.com/w320/br.png' },
    { name: 'Chile', flag: 'https://flagcdn.com/w320/cl.png' },
    { name: 'México', flag: 'https://flagcdn.com/w320/mx.png' },
    { name: 'España', flag: 'https://flagcdn.com/w320/es.png' },
    { name: 'Francia', flag: 'https://flagcdn.com/w320/fr.png' },
    { name: 'Italia', flag: 'https://flagcdn.com/w320/it.png' },
    { name: 'Alemania', flag: 'https://flagcdn.com/w320/de.png' },
    { name: 'Reino Unido', flag: 'https://flagcdn.com/w320/gb.png' },
    { name: 'Estados Unidos', flag: 'https://flagcdn.com/w320/us.png' },
    { name: 'Canadá', flag: 'https://flagcdn.com/w320/ca.png' },
    { name: 'Japón', flag: 'https://flagcdn.com/w320/jp.png' },
    { name: 'China', flag: 'https://flagcdn.com/w320/cn.png' },
    { name: 'Corea del Sur', flag: 'https://flagcdn.com/w320/kr.png' },
    { name: 'Australia', flag: 'https://flagcdn.com/w320/au.png' },
    { name: 'Nueva Zelanda', flag: 'https://flagcdn.com/w320/nz.png' },
    { name: 'India', flag: 'https://flagcdn.com/w320/in.png' },
    { name: 'Rusia', flag: 'https://flagcdn.com/w320/ru.png' },
    { name: 'Sudáfrica', flag: 'https://flagcdn.com/w320/za.png' },
    { name: 'Egipto', flag: 'https://flagcdn.com/w320/eg.png' },
    { name: 'Colombia', flag: 'https://flagcdn.com/w320/co.png' },
    { name: 'Perú', flag: 'https://flagcdn.com/w320/pe.png' },
    { name: 'Uruguay', flag: 'https://flagcdn.com/w320/uy.png' },
    { name: 'Venezuela', flag: 'https://flagcdn.com/w320/ve.png' },
    { name: 'Portugal', flag: 'https://flagcdn.com/w320/pt.png' },
    { name: 'Grecia', flag: 'https://flagcdn.com/w320/gr.png' },
    { name: 'Países Bajos', flag: 'https://flagcdn.com/w320/nl.png' },
    { name: 'Bélgica', flag: 'https://flagcdn.com/w320/be.png' },
    { name: 'Suiza', flag: 'https://flagcdn.com/w320/ch.png' },
    { name: 'Suecia', flag: 'https://flagcdn.com/w320/se.png' },
    { name: 'Noruega', flag: 'https://flagcdn.com/w320/no.png' },
    { name: 'Dinamarca', flag: 'https://flagcdn.com/w320/dk.png' },
    { name: 'Finlandia', flag: 'https://flagcdn.com/w320/fi.png' },
    { name: 'Polonia', flag: 'https://flagcdn.com/w320/pl.png' },
    { name: 'Turquía', flag: 'https://flagcdn.com/w320/tr.png' },
    { name: 'Irlanda', flag: 'https://flagcdn.com/w320/ie.png' },
    { name: 'Islandia', flag: 'https://flagcdn.com/w320/is.png' },
    { name: 'Cuba', flag: 'https://flagcdn.com/w320/cu.png' },
    { name: 'Jamaica', flag: 'https://flagcdn.com/w320/jm.png' },
    { name: 'Tailandia', flag: 'https://flagcdn.com/w320/th.png' },
    { name: 'Vietnam', flag: 'https://flagcdn.com/w320/vn.png' },
    { name: 'Singapur', flag: 'https://flagcdn.com/w320/sg.png' },
    { name: 'Malasia', flag: 'https://flagcdn.com/w320/my.png' },
    { name: 'Filipinas', flag: 'https://flagcdn.com/w320/ph.png' },
    { name: 'Indonesia', flag: 'https://flagcdn.com/w320/id.png' },
    { name: 'Arabia Saudita', flag: 'https://flagcdn.com/w320/sa.png' },
    { name: 'Emiratos Árabes Unidos', flag: 'https://flagcdn.com/w320/ae.png' },
    { name: 'Israel', flag: 'https://flagcdn.com/w320/il.png' },
    { name: 'Marruecos', flag: 'https://flagcdn.com/w320/ma.png' },
    { name: 'Kenia', flag: 'https://flagcdn.com/w320/ke.png' }
];

// Estado del juego principal
let currentCountry = null;
let options = [];
let score = 0;
let streak = 0;
let correctAnswers = 0;
let usedCountries = [];
let lives = 3;
let hasUsedSecondChance = false;

// Estado del minijuego
let minigameTimer = null;
let minigameTimeLeft = 30;
let diamondsCaught = 0;
let currentDiamondCell = null;
let minigameInterval = null;

// Elementos del DOM - Juego Principal
const flagImage = document.getElementById('flag-image');
const optionButtons = document.querySelectorAll('.option-btn');
const scoreElement = document.getElementById('score');
const streakElement = document.getElementById('streak');
const correctElement = document.getElementById('correct');
const livesElement = document.getElementById('lives');
const feedbackElement = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');

// Elementos del DOM - Pantallas
const gameOverScreen = document.getElementById('game-over-screen');
const minigameScreen = document.getElementById('minigame-screen');
const restartGameOverBtn = document.getElementById('restart-game-over');
const finalScoreElement = document.getElementById('final-score');
const finalCorrectElement = document.getElementById('final-correct');

// Elementos del DOM - Minijuego
const minigameCells = document.querySelectorAll('.minigame-cell');
const diamondsCaughtElement = document.getElementById('diamonds-caught');
const minigameTimeElement = document.getElementById('minigame-time');

// Función para obtener países aleatorios
function getRandomCountries(count, exclude = []) {
    const availableCountries = countries.filter(c => !exclude.includes(c));
    const shuffled = [...availableCountries].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

// Función para actualizar las vidas visuales
function updateLives() {
    const hearts = '❤'.repeat(Math.max(0, lives)) + '🖤'.repeat(Math.max(0, 3 - lives));
    livesElement.textContent = hearts;

    // Animación de pérdida de vida
    livesElement.classList.add('life-lost');
    setTimeout(() => {
        livesElement.classList.remove('life-lost');
    }, 600);
}

// Función para cargar una nueva pregunta
function loadNewQuestion() {
    // Reiniciar si ya se usaron todos los países
    if (usedCountries.length >= countries.length) {
        usedCountries = [];
    }

    // Seleccionar un país que no se haya usado
    const availableCountries = countries.filter(c => !usedCountries.includes(c.name));
    currentCountry = availableCountries[Math.floor(Math.random() * availableCountries.length)];
    usedCountries.push(currentCountry.name);

    // Cargar la bandera
    flagImage.src = currentCountry.flag;
    flagImage.alt = 'Bandera misteriosa';

    // Generar opciones (3 incorrectas + 1 correcta)
    const wrongOptions = getRandomCountries(3, [currentCountry]);
    options = [...wrongOptions, currentCountry].sort(() => Math.random() - 0.5);

    // Actualizar botones
    optionButtons.forEach((btn, index) => {
        btn.textContent = options[index].name;
        btn.disabled = false;
        btn.classList.remove('correct', 'incorrect');
        btn.onclick = () => checkAnswer(options[index], btn);
    });

    // Limpiar feedback
    feedbackElement.textContent = '';
    feedbackElement.className = 'feedback';
    nextBtn.style.display = 'none';
}

// Función para verificar la respuesta
function checkAnswer(selectedCountry, button) {
    const isCorrect = selectedCountry.name === currentCountry.name;

    // Deshabilitar todos los botones
    optionButtons.forEach(btn => btn.disabled = true);

    if (isCorrect) {
        // Respuesta correcta
        button.classList.add('correct');
        score += 100 + (streak * 10); // Bonus por racha
        streak++;
        correctAnswers++;
        feedbackElement.textContent = '¡CORRECTO! +' + (100 + ((streak - 1) * 10)) + ' puntos';
        feedbackElement.className = 'feedback correct';

        // Efecto visual de acierto
        document.body.classList.add('flash-correct');
        setTimeout(() => document.body.classList.remove('flash-correct'), 500);

        playSound('correct');

        // Actualizar estadísticas
        updateStats();

        // Avanzar automáticamente después de 1.5 segundos
        setTimeout(() => {
            loadNewQuestion();
        }, 1500);

    } else {
        // Respuesta incorrecta - PERDER VIDA
        button.classList.add('incorrect');
        streak = 0;
        lives--;

        console.log('Vida perdida. Vidas restantes:', lives); // Debug

        // Efecto visual de error
        document.body.classList.add('flash-incorrect');
        setTimeout(() => document.body.classList.remove('flash-incorrect'), 500);

        feedbackElement.textContent = 'INCORRECTO. Era: ' + currentCountry.name + ' | -1 VIDA';
        feedbackElement.className = 'feedback incorrect';

        // Mostrar la opción correcta
        optionButtons.forEach((btn, index) => {
            if (options[index].name === currentCountry.name) {
                btn.classList.add('correct');
            }
        });
        playSound('incorrect');

        // Actualizar estadísticas ANTES de verificar game over
        updateStats();

        // Verificar si se acabaron las vidas
        if (lives <= 0) {
            // Ofrecer segunda oportunidad solo la primera vez
            if (!hasUsedSecondChance) {
                hasUsedSecondChance = true;
                setTimeout(() => {
                    startMinigame();
                }, 2000);
                return; // No mostrar el botón siguiente
            } else {
                // Game Over definitivo
                setTimeout(() => {
                    showGameOver();
                }, 2000);
                return; // No mostrar el botón siguiente
            }
        }

        // Mostrar botón siguiente solo si aún tiene vidas
        nextBtn.style.display = 'block';
    }
}

// Función para actualizar las estadísticas
function updateStats() {
    scoreElement.textContent = score;
    streakElement.textContent = streak;
    correctElement.textContent = correctAnswers;
    updateLives();
}

// Función para mostrar Game Over
function showGameOver() {
    finalScoreElement.textContent = score;
    finalCorrectElement.textContent = correctAnswers;
    gameOverScreen.style.display = 'flex';
}

// Función para sonidos (simulado con console.log ya que no hay archivos de audio)
function playSound(type) {
    console.log(`Sound: ${type}`);
}

// Función para reiniciar el juego
function restartGame() {
    score = 0;
    streak = 0;
    correctAnswers = 0;
    lives = 3;
    usedCountries = [];
    hasUsedSecondChance = false;
    gameOverScreen.style.display = 'none';
    updateStats();
    loadNewQuestion();
}

// ==================== MINIJUEGO ====================

// Función para iniciar el minijuego
function startMinigame() {
    minigameScreen.style.display = 'flex';
    minigameTimeLeft = 30;
    diamondsCaught = 0;
    currentDiamondCell = null;

    updateMinigameDisplay();

    // Limpiar celdas
    minigameCells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('diamond', 'hit');
        cell.onclick = null;
    });

    // Iniciar generación de diamantes
    spawnDiamond();
    minigameInterval = setInterval(spawnDiamond, 1200); // Nuevo diamante cada 1.2s

    // Iniciar temporizador
    minigameTimer = setInterval(() => {
        minigameTimeLeft--;
        updateMinigameDisplay();

        if (minigameTimeLeft <= 0) {
            endMinigame(false); // Tiempo agotado - perdió
        }
    }, 1000);
}

// Función para generar un diamante en una celda aleatoria
function spawnDiamond() {
    // Limpiar celdas anteriores
    minigameCells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('diamond');
        cell.onclick = null;
    });

    // Generar items aleatorios en cada celda
    const items = ['🪨', '🪨', '🪨', '💎']; // 3 piedras, 1 diamante
    const shuffled = items.sort(() => Math.random() - 0.5);

    minigameCells.forEach((cell, index) => {
        const item = shuffled[index];
        cell.textContent = item;

        if (item === '💎') {
            cell.classList.add('diamond');
            currentDiamondCell = index;
        }

        cell.onclick = () => handleMinigameClick(item, cell);
    });
}

// Función para manejar clicks en el minijuego
function handleMinigameClick(item, cell) {
    if (item === '💎') {
        // ¡Atrapó un diamante!
        diamondsCaught++;
        cell.classList.add('hit');
        updateMinigameDisplay();

        // Verificar si ganó
        if (diamondsCaught >= 3) {
            endMinigame(true); // Ganó!
        } else {
            // Generar nuevo diamante inmediatamente
            setTimeout(spawnDiamond, 300);
        }
    } else {
        // Click en piedra - no pasa nada (o podría restar tiempo)
        cell.style.opacity = '0.5';
        setTimeout(() => {
            cell.style.opacity = '1';
        }, 200);
    }
}

// Función para actualizar display del minijuego
function updateMinigameDisplay() {
    diamondsCaughtElement.textContent = diamondsCaught;
    minigameTimeElement.textContent = minigameTimeLeft;
}

// Función para terminar el minijuego
function endMinigame(won) {
    // Limpiar temporizadores
    clearInterval(minigameTimer);
    clearInterval(minigameInterval);

    minigameScreen.style.display = 'none';

    if (won) {
        // ¡Ganó! Recupera una vida
        lives = 1; // Le damos 1 vida para continuar
        updateLives();
        alert('¡FELICIDADES! Atrapaste los diamantes.\nRecuperaste una vida. ¡Sigue jugando!');
        loadNewQuestion();
    } else {
        // Perdió el minijuego - Game Over definitivo
        showGameOver();
    }
}

// Event Listeners
nextBtn.addEventListener('click', loadNewQuestion);
restartBtn.addEventListener('click', restartGame);
restartGameOverBtn.addEventListener('click', restartGame);

// Iniciar el juego al cargar
updateStats();
loadNewQuestion();
