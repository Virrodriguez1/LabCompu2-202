/**
 * SIMULADOR MRU - Movimiento Rectilíneo Uniforme
 * Fórmula: distancia = velocidad × tiempo
 */

// ============ VARIABLES GLOBALES ============

// Obtenemos los elementos del HTML
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let inputVelocidad = document.getElementById("velocidad");
let inputTiempo = document.getElementById("tiempo");
let inputTamanio = document.getElementById("tamanio");
let spanResultado = document.getElementById("resultado");

let btnCalcular = document.getElementById("btnCalcular");
let btnAnimar = document.getElementById("btnAnimar");
let btnReiniciar = document.getElementById("btnReiniciar");

// Variables para la animación
let posicionX = 50;
let animacionActiva = null;
let distanciaFinal = 0;

// ============ FUNCIONES ============

/**
 * Valida que los valores ingresados sean correctos
 * @method validarInputs
 * @return {boolean} true si son válidos, false si no
 */
function validarInputs() {
    let velocidad = Number(inputVelocidad.value);
    let tiempo = Number(inputTiempo.value);
    let tamanio = Number(inputTamanio.value);

    // Verificar que no estén vacíos
    if (inputVelocidad.value === "" || inputTiempo.value === "" || inputTamanio.value === "") {
        alert("Por favor, completá todos los campos");
        return false;
    }

    // Verificar que sean números positivos
    if (velocidad <= 0) {
        alert("La velocidad debe ser mayor a 0");
        inputVelocidad.value = "";
        return false;
    }

    if (tiempo <= 0) {
        alert("El tiempo debe ser mayor a 0");
        inputTiempo.value = "";
        return false;
    }

    if (tamanio <= 0) {
        alert("El tamaño debe ser mayor a 0");
        inputTamanio.value = "";
        return false;
    }

    return true;
}

/**
 * Calcula la distancia usando la fórmula MRU: d = v × t
 * @method calcularDistancia
 * @param {number} velocidad - Velocidad en px/s
 * @param {number} tiempo - Tiempo en segundos
 * @return {number} Distancia calculada en píxeles
 */
function calcularDistancia(velocidad, tiempo) {
    let distancia = velocidad * tiempo;
    return distancia;
}

/**
 * Dibuja a Pacman en el canvas
 * @method dibujarPacman
 * @param {number} x - Posición horizontal
 * @param {number} tamanio - Tamaño de Pacman
 */
function dibujarPacman(x, tamanio) {
    // Limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar línea del suelo
    ctx.strokeStyle = "#2121DE";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, canvas.height - 30);
    ctx.lineTo(canvas.width, canvas.height - 30);
    ctx.stroke();

    // Dibujar a Pacman (círculo amarillo con boca)
    let centroY = canvas.height - 30 - tamanio / 2;

    ctx.fillStyle = "#FFFF00";
    ctx.beginPath();
    ctx.arc(x, centroY, tamanio / 2, 0.2 * Math.PI, 1.8 * Math.PI);
    ctx.lineTo(x, centroY);
    ctx.closePath();
    ctx.fill();

    // Ojo de Pacman
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(x, centroY - tamanio / 5, tamanio / 10, 0, 2 * Math.PI);
    ctx.fill();
}

/**
 * Anima a Pacman moviéndose hasta la distancia calculada
 * @method animarPacman
 */
function animarPacman() {
    let velocidad = Number(inputVelocidad.value);
    let tamanio = Number(inputTamanio.value);

    // Si llegó al destino, parar
    if (posicionX >= distanciaFinal + 50) {
        cancelAnimationFrame(animacionActiva);
        animacionActiva = null;
        return;
    }

    // Mover Pacman
    posicionX = posicionX + (velocidad / 10);

    // Dibujar en la nueva posición
    dibujarPacman(posicionX, tamanio);

    // Seguir animando
    animacionActiva = requestAnimationFrame(animarPacman);
}

/**
 * Reinicia el simulador a su estado inicial
 * @method reiniciar
 */
function reiniciar() {
    // Parar animación si está corriendo
    if (animacionActiva) {
        cancelAnimationFrame(animacionActiva);
        animacionActiva = null;
    }

    // Resetear valores
    posicionX = 50;
    distanciaFinal = 0;
    spanResultado.textContent = "0";

    // Redibujar Pacman en posición inicial
    let tamanio = Number(inputTamanio.value) || 40;
    dibujarPacman(posicionX, tamanio);
}

// ============ EVENTOS ============

// Botón CALCULAR
btnCalcular.addEventListener("click", function() {
    if (validarInputs()) {
        let velocidad = Number(inputVelocidad.value);
        let tiempo = Number(inputTiempo.value);

        distanciaFinal = calcularDistancia(velocidad, tiempo);
        spanResultado.textContent = distanciaFinal;
    }
});

// Botón ANIMAR
btnAnimar.addEventListener("click", function() {
    if (validarInputs()) {
        // Calcular primero
        let velocidad = Number(inputVelocidad.value);
        let tiempo = Number(inputTiempo.value);
        distanciaFinal = calcularDistancia(velocidad, tiempo);
        spanResultado.textContent = distanciaFinal;

        // Reiniciar posición y animar
        posicionX = 50;
        animarPacman();
    }
});

// Botón REINICIAR
btnReiniciar.addEventListener("click", reiniciar);

// ============ INICIO ============

// Dibujar Pacman al cargar la página
dibujarPacman(50, 40);