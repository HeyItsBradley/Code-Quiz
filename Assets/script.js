var userChoice = null;
var startEl = document.querySelector("#startButton");

var headerEl = document.querySelector("#Heading");
var startText = document.getElementById("text");
var Questions = [
  {
    title: "This is questions 1",
    choices: ["Choice Yes", "Choice No", "Choices MaybeSo", "Choices Perhabs"],
    answer: "Choice No",
  },
  {
    title: "You want to play?",
    choices: ["no", "no", "no", "LETS PLAY"],
    answer: "LETS PLAY",
  },
  {
    title: "Do you like coding?",
    choices: ["YES", "no", "...", "maybe"],
    answer: "YES",
  },
];

var timer = document.getElementById("timer");
var time = 0;
var answerArea = document.getElementById("placeButtons");
var makeBtn = document.body.querySelector("#placeButtons");
var questionAmount = Questions.length + 1;
var questionsWereOn;
var num = 0;
var score = "";

function startTimer() {
  timer.textContent = 70;
}

function endScreen() {
  document.body.querySelector("#placeButtons").textContent = "";
  document.getElementById("Heading").textContent = "High Scores!";
  
}

function startQuiz() {
  questionAmount = questionAmount - 1;

  if (questionAmount <= 0) {
    endScreen();
    return;
  }
  var currentQuestion = Questions[num];
  console.log("the current value of num is " + num);

  answerArea.textContent = "";

  headerEl.textContent = currentQuestion.title;

  startEl.style.visibility = "hidden";
  startText.style.visibility = "hidden";

  makeBtn.appendChild(document.createElement("button")).textContent =
    currentQuestion.choices[0];

  makeBtn.appendChild(document.createElement("button")).textContent =
    currentQuestion.choices[1];

  makeBtn.appendChild(document.createElement("button")).textContent =
    currentQuestion.choices[2];

  makeBtn.appendChild(document.createElement("button")).textContent =
    currentQuestion.choices[3];

  answerArea.children.className = "option";

  answerArea.children[0].setAttribute("Answer", currentQuestion.choices[0]);
  answerArea.children[1].setAttribute("Answer", currentQuestion.choices[1]);
  answerArea.children[2].setAttribute("Answer", currentQuestion.choices[2]);
  answerArea.children[3].setAttribute("Answer", currentQuestion.choices[3]);

  for (let i = 0; i < answerArea.children.length; i++) {
    if (answerArea.children[i].textContent === currentQuestion.answer) {
      answerArea.children[i].setAttribute("status", "Correct");
    } else {
      answerArea.children[i].setAttribute("status", "Wrong");
    }
  }

  answerArea.children[0].addEventListener("click", function () {
    userChoice = answerArea.children[0].getAttribute("status");
    if (userChoice === "Correct") {
      num++;
      startQuiz();
    } else {
    }
  });

  answerArea.children[1].addEventListener("click", function () {
    userChoice = answerArea.children[1].getAttribute("status");
    if (userChoice === "Correct") {
      num++;
      startQuiz();
    } else {
    }
  });

  answerArea.children[2].addEventListener("click", function () {
    userChoice = answerArea.children[2].getAttribute("status");
    if (userChoice === "Correct") {
      num++;
      startQuiz();
    } else {
    }
  });

  answerArea.children[3].addEventListener("click", function () {
    userChoice = answerArea.children[3].getAttribute("status");
    if (userChoice === "Correct") {
      num++;
      startQuiz();
    } else {
    }
  });
}

startEl.addEventListener("click", () => {
  startQuiz();
  startTimer();
});
