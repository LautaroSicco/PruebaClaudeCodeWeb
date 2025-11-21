// Base de datos de personas famosas con sus fotos
const celebrities = [
    // Actores y Actrices
    { name: 'Leonardo DiCaprio', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Leonardo_Dicaprio_Cannes_2019.jpg/400px-Leonardo_Dicaprio_Cannes_2019.jpg', category: 'Actor' },
    { name: 'Scarlett Johansson', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Scarlett_Johansson_by_Gage_Skidmore_2_%28cropped%2C_2%29.jpg/400px-Scarlett_Johansson_by_Gage_Skidmore_2_%28cropped%2C_2%29.jpg', category: 'Actriz' },
    { name: 'Tom Cruise', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Tom_Cruise_by_Gage_Skidmore_2.jpg/400px-Tom_Cruise_by_Gage_Skidmore_2.jpg', category: 'Actor' },
    { name: 'Emma Watson', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Emma_Watson_2013.jpg/400px-Emma_Watson_2013.jpg', category: 'Actriz' },
    { name: 'Will Smith', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg/400px-TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg', category: 'Actor' },
    { name: 'Angelina Jolie', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Angelina_Jolie_2_June_2014_%28cropped%29.jpg/400px-Angelina_Jolie_2_June_2014_%28cropped%29.jpg', category: 'Actriz' },
    { name: 'Robert Downey Jr.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg/400px-Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg', category: 'Actor' },
    { name: 'Jennifer Lawrence', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Jennifer_Lawrence_SDCC_2015_X-Men.jpg/400px-Jennifer_Lawrence_SDCC_2015_X-Men.jpg', category: 'Actriz' },
    { name: 'Dwayne Johnson', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Dwayne_Johnson_2%2C_2013.jpg/400px-Dwayne_Johnson_2%2C_2013.jpg', category: 'Actor' },
    { name: 'Margot Robbie', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Margot_Robbie_%2848475777346%29_%28cropped%29.jpg/400px-Margot_Robbie_%2848475777346%29_%28cropped%29.jpg', category: 'Actriz' },

    // Músicos
    { name: 'Taylor Swift', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/191125_Taylor_Swift_at_the_2019_American_Music_Awards_%28cropped%29.png/400px-191125_Taylor_Swift_at_the_2019_American_Music_Awards_%28cropped%29.png', category: 'Cantante' },
    { name: 'Ed Sheeran', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Ed_Sheeran-6886_%28cropped%29.jpg/400px-Ed_Sheeran-6886_%28cropped%29.jpg', category: 'Cantante' },
    { name: 'Beyoncé', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Beyonce_-_The_Formation_World_Tour%2C_at_Wembley_Stadium_in_London%2C_England.jpg/400px-Beyonce_-_The_Formation_World_Tour%2C_at_Wembley_Stadium_in_London%2C_England.jpg', category: 'Cantante' },
    { name: 'Bruno Mars', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Bruno_Mars_2011_%28Cropped%29.jpg/400px-Bruno_Mars_2011_%28Cropped%29.jpg', category: 'Cantante' },
    { name: 'Ariana Grande', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Ariana_Grande_Grammys_Red_Carpet_2020.png/400px-Ariana_Grande_Grammys_Red_Carpet_2020.png', category: 'Cantante' },
    { name: 'Eminem', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Eminem_-_Concert_for_Valor_in_Washington_DC_Nov._11%2C_2014_%282%29_%28Cropped%29.jpg/400px-Eminem_-_Concert_for_Valor_in_Washington_DC_Nov._11%2C_2014_%282%29_%28Cropped%29.jpg', category: 'Rapero' },
    { name: 'Rihanna', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Rihanna_Fenty_2018.png/400px-Rihanna_Fenty_2018.png', category: 'Cantante' },
    { name: 'Justin Bieber', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Justin_Bieber_in_2015.jpg/400px-Justin_Bieber_in_2015.jpg', category: 'Cantante' },
    { name: 'Lady Gaga', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Lady_Gaga_at_Joe_Biden%27s_inauguration_%28cropped_3%29.jpg/400px-Lady_Gaga_at_Joe_Biden%27s_inauguration_%28cropped_3%29.jpg', category: 'Cantante' },
    { name: 'Shakira', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Shakira_2020_%28cropped%29.png/400px-Shakira_2020_%28cropped%29.png', category: 'Cantante' },

    // Deportistas
    { name: 'Lionel Messi', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/400px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg', category: 'Futbolista' },
    { name: 'Cristiano Ronaldo', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/400px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg', category: 'Futbolista' },
    { name: 'Serena Williams', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Serena_Williams_at_2013_US_Open.jpg/400px-Serena_Williams_at_2013_US_Open.jpg', category: 'Tenista' },
    { name: 'LeBron James', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg/400px-LeBron_James_%2851959977144%29_%28cropped2%29.jpg', category: 'Basquetbolista' },
    { name: 'Neymar Jr', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Neymar_Jr._with_Al_Hilal%2C_3_October_2023_-_03_%28cropped%29.jpg/400px-Neymar_Jr._with_Al_Hilal%2C_3_October_2023_-_03_%28cropped%29.jpg', category: 'Futbolista' },
    { name: 'Rafael Nadal', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Rafael_Nadal_10%2C_Aegon_Championships%2C_London%2C_UK_-_Diliff.jpg/400px-Rafael_Nadal_10%2C_Aegon_Championships%2C_London%2C_UK_-_Diliff.jpg', category: 'Tenista' },
    { name: 'Usain Bolt', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Usain_Bolt_smiling_Berlin_2009.JPG/400px-Usain_Bolt_smiling_Berlin_2009.JPG', category: 'Atleta' },
    { name: 'Michael Phelps', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Michael_Phelps_Rio_Olympics_2016.jpg/400px-Michael_Phelps_Rio_Olympics_2016.jpg', category: 'Nadador' },
    { name: 'Simone Biles', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Simone_Biles_Rio_2016d.jpg/400px-Simone_Biles_Rio_2016d.jpg', category: 'Gimnasta' },
    { name: 'Kylian Mbappé', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/2019147193923_2019-05-27_Fussball_1.FC_Kaiserslautern_vs._FC_Bayern_M%C3%BCnchen_-_Sven_-_1D_X_MK_II_-_2342_-_B70I0524_%28cropped%29.jpg/400px-thumbnail.jpg', category: 'Futbolista' },

    // Innovadores y Empresarios
    { name: 'Elon Musk', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/400px-Elon_Musk_Royal_Society_%28crop2%29.jpg', category: 'Empresario' },
    { name: 'Bill Gates', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bill_Gates_2018.jpg/400px-Bill_Gates_2018.jpg', category: 'Empresario' },
    { name: 'Mark Zuckerberg', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/400px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg', category: 'Empresario' },
    { name: 'Jeff Bezos', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Jeff_Bezos_visits_LAAFB_SMC_%283908618%29_%28cropped%29.jpeg/400px-Jeff_Bezos_visits_LAAFB_SMC_%283908618%29_%28cropped%29.jpeg', category: 'Empresario' },
    { name: 'Steve Jobs', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Steve_Jobs_Headshot_2010-CROP2.jpg/400px-Steve_Jobs_Headshot_2010-CROP2.jpg', category: 'Empresario' },

    // Personalidades Históricas y Líderes
    { name: 'Barack Obama', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/400px-President_Barack_Obama.jpg', category: 'Político' },
    { name: 'Nelson Mandela', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Nelson_Mandela-2008_%28cropped%29.jpg/400px-Nelson_Mandela-2008_%28cropped%29.jpg', category: 'Líder' },
    { name: 'Malala Yousafzai', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Malala_Yousafzai_2015.jpg/400px-Malala_Yousafzai_2015.jpg', category: 'Activista' },
    { name: 'Albert Einstein', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/400px-Albert_Einstein_Head.jpg', category: 'Científico' },
    { name: 'Stephen Hawking', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Stephen_Hawking.StarChild.jpg/400px-Stephen_Hawking.StarChild.jpg', category: 'Científico' },

    // Más Personalidades
    { name: 'Oprah Winfrey', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Oprah_Winfrey_2023_Colour_of_Change.png/400px-Oprah_Winfrey_2023_Colour_of_Change.png', category: 'Presentadora' },
    { name: 'Ellen DeGeneres', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Ellen_DeGeneres-2009.jpg/400px-Ellen_DeGeneres-2009.jpg', category: 'Comediante' },
    { name: 'Gordon Ramsay', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Gordon_Ramsay.jpg/400px-Gordon_Ramsay.jpg', category: 'Chef' },
    { name: 'J.K. Rowling', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/J._K._Rowling_2010.jpg/400px-J._K._Rowling_2010.jpg', category: 'Escritora' },
    { name: 'Pablo Picasso', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Pablo_picasso_1.jpg/400px-Pablo_picasso_1.jpg', category: 'Artista' },
    { name: 'David Beckham', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/David_Beckham_UNICEF_%28cropped%29.jpg/400px-David_Beckham_UNICEF_%28cropped%29.jpg', category: 'Futbolista' },
    { name: 'Greta Thunberg', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Greta_Thunberg_au_parlement_europ%C3%A9en_%2833744056508%29%2C_recadr%C3%A9e.png/400px-Greta_Thunberg_au_parlement_europ%C3%A9en_%2833744056508%29%2C_recadr%C3%A9e.png', category: 'Activista' },
    { name: 'Keanu Reeves', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Reuni%C3%A3o_com_o_ator_norte-americano_Keanu_Reeves_%2846806576944%29_%28cropped%29.jpg/400px-Reuni%C3%A3o_com_o_ator_norte-americano_Keanu_Reeves_%2846806576944%29_%28cropped%29.jpg', category: 'Actor' },
    { name: 'Kobe Bryant', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Kobe_Bryant_8.jpg/400px-Kobe_Bryant_8.jpg', category: 'Basquetbolista' },
    { name: 'Diego Maradona', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Maradona-Mundial_86_con_la_copa.jpg/400px-Maradona-Mundial_86_con_la_copa.jpg', category: 'Futbolista' }
];

// Estado del juego principal
let currentCelebrity = null;
let options = [];
let score = 0;
let streak = 0;
let correctAnswers = 0;
let usedCelebrities = [];
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

// Función para obtener celebridades aleatorias
function getRandomCelebrities(count, exclude = []) {
    const availableCelebrities = celebrities.filter(c => !exclude.includes(c));
    const shuffled = [...availableCelebrities].sort(() => Math.random() - 0.5);
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
    // Reiniciar si ya se usaron todas las celebridades
    if (usedCelebrities.length >= celebrities.length) {
        usedCelebrities = [];
    }

    // Seleccionar una celebridad que no se haya usado
    const availableCelebrities = celebrities.filter(c => !usedCelebrities.includes(c.name));
    currentCelebrity = availableCelebrities[Math.floor(Math.random() * availableCelebrities.length)];
    usedCelebrities.push(currentCelebrity.name);

    // Cargar la imagen
    flagImage.src = currentCelebrity.image;
    flagImage.alt = 'Persona misteriosa';

    // Generar opciones (3 incorrectas + 1 correcta)
    const wrongOptions = getRandomCelebrities(3, [currentCelebrity]);
    options = [...wrongOptions, currentCelebrity].sort(() => Math.random() - 0.5);

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
function checkAnswer(selectedCelebrity, button) {
    const isCorrect = selectedCelebrity.name === currentCelebrity.name;

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

        feedbackElement.textContent = 'INCORRECTO. Era: ' + currentCelebrity.name + ' | -1 VIDA';
        feedbackElement.className = 'feedback incorrect';

        // Mostrar la opción correcta
        optionButtons.forEach((btn, index) => {
            if (options[index].name === currentCelebrity.name) {
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
    usedCelebrities = [];
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
