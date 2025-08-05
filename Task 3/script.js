const quizData = [
  {
    question: "Which language is used to style web pages?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    answer: "CSS"
  },
  {
    question: "Which one is a JavaScript framework?",
    options: ["Django", "Flask", "React", "Laravel"],
    answer: "React"
  },
  {
    question: "Which tag is used for creating links in HTML?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    answer: "<a>"
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuiz() {
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const current = quizData[currentQuestion];

  questionEl.textContent = current.question;
  optionsEl.innerHTML = '';

  current.options.forEach(option => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = quizData[currentQuestion].answer;
  if (selected === correct) {
    score++;
  }
  document.getElementById("result").textContent = `Current Score: ${score}/${quizData.length}`;
}

document.getElementById("next-btn").addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuiz();
  } else {
    document.querySelector(".quiz-section").innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>Your Score: ${score}/${quizData.length}</p>
    `;
  }
});

function fetchJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" }
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById("joke").textContent = data.joke;
    });
}

// Load first question
loadQuiz();
