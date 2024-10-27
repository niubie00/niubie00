// Array de preguntas
const questions = [
    {
        text: "La atmósfera es la capa más externa de la Tierra.",
        answer: true
    },
    {
        text: "El agua es un gas en su estado natural.",
        answer: false
    },
    {
        text: "El suelo tiene un papel fundamental en el ciclo del carbono.",
        answer: true
    }
];

let currentQuestionIndex = 0;

// Mostrar la pregunta actual
function showQuestion() {
    const questionElement = document.getElementById('question');
    questionElement.textContent = questions[currentQuestionIndex].text;
}

// Verificar la respuesta seleccionada
function checkAnswer(userAnswer) {
    const resultElement = document.getElementById('result');
    const currentQuestion = questions[currentQuestionIndex];

    if (userAnswer === currentQuestion.answer) {
        resultElement.textContent = "¡Correcto!";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Incorrecto.";
        resultElement.style.color = "red";
    }

    // Mostrar la siguiente pregunta después de 1.5 segundos
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
            resultElement.textContent = "";
        } else {
            resultElement.textContent = "¡Juego Terminado!";
        }
    }, 1500);
}

// Iniciar la primera pregunta al cargar la página
document.addEventListener('DOMContentLoaded', showQuestion);
