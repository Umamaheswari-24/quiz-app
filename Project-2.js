
const quizData = [
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: ["Central Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "Which is not a programming language?",
    options: ["Python", "HTML", "Java", "C++"],
    answer: "HTML"
  },
  {
    question: "Which tag is used to link CSS?",
    options: ["<script>", "<link>", "<style>", "<css>"],
    answer: "<link>"
  }
];

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 30;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("time");

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      showScore();
    }
  }, 1000);
}

function loadQuestion() {
  const current = quizData[currentQuestion];
  questionEl.textContent = current.question;
  optionsEl.innerHTML = "";

  current.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.addEventListener("click", () => {
      if (option === current.answer) {
        score++;
      }
      nextBtn.style.display = "block";
    });
    optionsEl.appendChild(btn);
  });

  nextBtn.style.display = "none";
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    clearInterval(timer);
    showScore();
  }
});

function showScore() {
  quizBox.innerHTML = `<h2>Your Score: ${score}/${quizData.length}</h2>`;
}

const quizBox = document.getElementById("quiz-box");

loadQuestion();
startTimer();

