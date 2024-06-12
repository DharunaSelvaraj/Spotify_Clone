// script.js
const questions = [
    {
        question: "Who played the double role in the movie Ram Aur Shyam?",
        choices: ["Dilip Kumar", "Shammi Kapoor", "Dev Anand", " Raj Kapoor"],
        answer: "Dilip Kumar"
    },
    {
        question: "Which instrument does Zakir Hussain play?",
        choices: ["Sitar", "Violin", "Tabla", "Guitar"],
        answer: "Tabla"
    },
    {
        question: "Before Miley Cyrus recorded Wrecking Ball, it was offered to which singer?",
        choices: ["Taylor Swift", "Selena Gomez", "Britney spears", "Beyonce"],
        answer: "Beyonce"
    },
    {
        question: "What is the first line to Taylor Swift's 'Love Story'?",
        choices: ["Romeo, take me somewhere we can be alone", "'We were both young when I first saw you", "I'm standin' there", "It's a love story, baby, just say, Yes"],
        answer: "'We were both young when I first saw you"
    },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const nextButton = document.getElementById('nextButton');
const resultElement = document.getElementById('result');

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    choicesElement.innerHTML = '';

    currentQuestion.choices.forEach(choice => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.textContent = choice;
        button.onclick = () => selectAnswer(choice);
        li.appendChild(button);
        choicesElement.appendChild(li);
    });
}

function selectAnswer(choice) {
    const currentQuestion = questions[currentQuestionIndex];
    if (choice === currentQuestion.answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.style.display = 'none';
    choicesElement.style.display = 'none';
    nextButton.style.display = 'none';
    resultElement.textContent = `You scored ${score} out of ${questions.length}`;
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

showQuestion();
