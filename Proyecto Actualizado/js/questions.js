/**
 * Exporta un array de objetos que contienen preguntas y respuestas sobre Pacman, 4 contenedores.
 * @method PreguntasPacman
 * @return {Array} Lista de objetos, cada uno con una pregunta y sus posibles respuestas.
 */


export default [
    {
        /**
         * Pregunta sobre el nombre original de Pacman
         * @param {string} question - La pregunta
         * @param {Array} answers - Lista de posibles respuestas
         * @param {string} answers.option - Una posible respuesta
         * @param {boolean} answers.correct - Indica si la respuesta es correcta
         */

        question: "Como se llamaba originalmente Pacman?",
        answers: [
            {option: "Puckman", correct: true},
            {option: "Pacson", correct: false},
            {option: "Tapman", correct: false},
        ],
    },
    {
        /**
         * Pregunta sobre el lugar de creación de Pacman
         * @param {string} question - La pregunta
         * @param {Array} answers - Lista de posibles respuestas
         * @param {string} answers.option - Una posible respuesta
         * @param {boolean} answers.correct - Indica si la respuesta es correcta
         */
        question: "Donde se creo?",
        answers: [
            {option: "China", correct: false},
            {option: "Japon", correct: true},
            {option: "Estados Unidos", correct: false},
        ],
    },
    {
        /**
         * Pregunta sobre el año de creación de Pacman
         * @param {string} question - La pregunta
         * @param {Array} answers - Lista de posibles respuestas
         * @param {string} answers.option - Una posible respuesta
         * @param {boolean} answers.correct - Indica si la respuesta es correcta
         */
        question: "En que anio se creo?",
        answers: [
            {option: "1995", correct: false},
            {option: "1990", correct: false},
            {option: "1980", correct: true},
        ],
    },
    {
        /**
         * Pregunta sobre el color del fantasma Blinky
         * @param {string} question - La pregunta
         * @param {Array} answers - Lista de posibles respuestas
         * @param {string} answers.option - Una posible respuesta
         * @param {boolean} answers.correct - Indica si la respuesta es correcta
         */
        question: "De que color es el fantasma Blinky?",
        answers: [
            {option: "Rosa", correct: false},
            {option: "Amarillo", correct: false},
            {option: "Rojo", correct: true},
        ],
    },
];
