/**
 * Selección de los elementos del documento HTML
 * @method SeleccionarElementos
 * @return No retorna nada. Asigna los elementos seleccionados a variables.
 */

const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const contadorpreguntas = document.querySelector(".contadorpreguntas");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");


import questions from "./questions.js";


/**
 * Inicialización de variables globales
 * @method InicializarVariables
 * @var {number} currentIndex - Índice de la pregunta actual
 * @var {number} questionsCorrect - Contador de respuestas correctas
 * @return No retorna nada.
 */
let currentIndex = 0;
let questionsCorrect = 0;


/**
 * Evento de clic para reiniciar el cuestionario
 * @method ReiniciarCuestionario
 * @param No tiene parámetros. Resetea variables y carga la primera pregunta.
 * @return No retorna nada.
 */
btnRestart.onclick = () => {
    content.style.display = "flex";
    contentFinish.style.display = "none";

    currentIndex = 0;
    questionsCorrect = 0;
    loadQuestion();
};

/**
 * Manejo de la siguiente pregunta
 * @method SiguientePregunta
 * @param {Event} e - Evento de clic en una respuesta
 * @return No retorna nada. Verifica la respuesta y carga la siguiente pregunta o finaliza el cuestionario.
 */
function nextQuestion(e) {
    if (e.target.getAttribute("data-correct") === "true") {
        questionsCorrect++;
    }

    if (currentIndex < questions.length - 1) {
        currentIndex++;
        loadQuestion();
    } else {
        finish();
    }
}

/**
 * Finalización del cuestionario
 * @method FinalizarCuestionario
 * @return No retorna nada. Muestra el resultado final y oculta el contenido del cuestionario.
 */
function finish() {
    textFinish.innerHTML = `Has acertado ${questionsCorrect} de ${questions.length}`;
    content.style.display = "none";
    contentFinish.style.display = "flex";
}

/**
 * Carga y muestra la pregunta actual
 * @method CargarPregunta
 * @return No retorna nada. Actualiza el contenido de la pregunta y las respuestas en el DOM.
 */
function loadQuestion() {
    contadorpreguntas.innerHTML = `${currentIndex + 1}/${questions.length}`;
    const item = questions[currentIndex];
    answers.innerHTML = "";
    question.innerHTML = item.question;

    item.answers.forEach((answer) => {
        const div = document.createElement("div");

        div.innerHTML = `
    <button class="answer" data-correct="${answer.correct}">
      ${answer.option}
    </button>
    `;

        answers.appendChild(div);
    });

    document.querySelectorAll(".answer").forEach((item) => {
        item.addEventListener("click", nextQuestion);
    });
}

loadQuestion();
