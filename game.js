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

// Estado del juego
let currentCountry = null;
let options = [];
let score = 0;
let streak = 0;
let correctAnswers = 0;
let usedCountries = [];

// Elementos del DOM
const flagImage = document.getElementById('flag-image');
const optionButtons = document.querySelectorAll('.option-btn');
const scoreElement = document.getElementById('score');
const streakElement = document.getElementById('streak');
const correctElement = document.getElementById('correct');
const feedbackElement = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');

// Función para obtener países aleatorios
function getRandomCountries(count, exclude = []) {
    const availableCountries = countries.filter(c => !exclude.includes(c));
    const shuffled = [...availableCountries].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
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
        playSound('correct');
    } else {
        // Respuesta incorrecta
        button.classList.add('incorrect');
        streak = 0;
        feedbackElement.textContent = 'INCORRECTO. Era: ' + currentCountry.name;
        feedbackElement.className = 'feedback incorrect';

        // Mostrar la opción correcta
        optionButtons.forEach((btn, index) => {
            if (options[index].name === currentCountry.name) {
                btn.classList.add('correct');
            }
        });
        playSound('incorrect');
    }

    // Actualizar estadísticas
    updateStats();

    // Mostrar botón siguiente
    nextBtn.style.display = 'block';
}

// Función para actualizar las estadísticas
function updateStats() {
    scoreElement.textContent = score;
    streakElement.textContent = streak;
    correctElement.textContent = correctAnswers;
}

// Función para sonidos (simulado con console.log ya que no hay archivos de audio)
function playSound(type) {
    // En una implementación completa, aquí se reproducirían sonidos de Minecraft
    console.log(`Sound: ${type}`);
}

// Función para reiniciar el juego
function restartGame() {
    score = 0;
    streak = 0;
    correctAnswers = 0;
    usedCountries = [];
    updateStats();
    loadNewQuestion();
}

// Event Listeners
nextBtn.addEventListener('click', loadNewQuestion);
restartBtn.addEventListener('click', restartGame);

// Iniciar el juego al cargar
loadNewQuestion();
