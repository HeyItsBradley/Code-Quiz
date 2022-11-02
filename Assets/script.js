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
];

var timer = document.getElementById("timer");
var time = 0;
var answerArea = document.getElementById("placeButtons");
var makeBtn = document.body.querySelector("#placeButtons");

function startQuiz() {
  timer.textContent = 70;
  var randomChoice = Math.floor(Math.random() * Questions.length);
  var currentQuestion = Questions[randomChoice];
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
  answerArea.children[0];
  answerArea.children[1];
  answerArea.children[2];
  answerArea.children[3];

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
      console.log("ya thats right !");
      startQuiz();
    } else {
      console.log("did not work");
    }
    console.log(userChoice);
  });
  answerArea.children[1].addEventListener("click", function () {
    userChoice = answerArea.children[1].getAttribute("status");
    if (userChoice === "Correct") {
      console.log("ya thats right !");
      startQuiz();
    } else {
      console.log("did not work");
    }
  });
  answerArea.children[2].addEventListener("click", function () {
    userChoice = answerArea.children[2].getAttribute("status");
    if (userChoice === "Correct") {
      console.log("ya thats right !");
      startQuiz();
    } else {
      console.log("did not work");
    }
  });
  answerArea.children[3].addEventListener("click", function () {
    userChoice = answerArea.children[3].getAttribute("status");
    if (userChoice === "Correct") {
      console.log("ya thats right !");
      startQuiz();
    } else {
      console.log("did not work");
    }
  });
}

startEl.addEventListener("click", startQuiz);
