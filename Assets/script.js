var userChoice = null;
var startEl = document.querySelector("#startButton");
var scoreButton = document.getElementById("scoreButton");
var headerEl = document.querySelector("#Heading");
var startText = document.getElementById("text");
var submitButton = document.getElementById("submitName");
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
var answerArea = document.getElementById("placeButtons");
var makeBtn = document.body.querySelector("#placeButtons");
var questionAmount = Questions.length + 1;
var questionsWereOn;
var num = 0;
var score = "";
var highScoreList = JSON.parse(localStorage.getItem("highScoreList")) || [];

var amountHighScores = 5;
var makeHighScore = document.getElementById("HighScores");

console.log(highScoreList);

usersName.style.visibility = "hidden";
submitName.style.visibility = "hidden";

function startTimer() {
  
  var time = 30;
  var timeLeft = setInterval(function () {
    document.getElementById("timer").textContent = time;
    time--;
    if (time < 0 || questionAmount <= 0) {
      clearInterval(timeLeft);
    }
  }, 1000);
}

function submitScore() {
  document.body.querySelector("#placeButtons").textContent = "";
  document.getElementById("Heading").textContent = "Almost done !";
  usersName.style.visibility = "visible";
  submitName.style.visibility = "visible";

  submitName.addEventListener("click", function (event) {
    event.preventDefault();

    var enteredScore = document.getElementById("usersName").value;
    var score = timer.textContent;

    if (enteredScore === "") {
      alert("Please enter your name to submit score!");
      submitScore();
      return;
    } else {
      const scoreAndName = {
        name: enteredScore,
        score: score,
      };
      highScoreList.push(scoreAndName);

      highScoreList.sort((a, b) => b.score - a.score);

      highScoreList.splice(5);
      console.log("hello");
      localStorage.setItem("highscores", JSON.stringify(highScoreList));
      console.log(highScoreList);
      highScoreScreen();
    }
  });
}
function highScoreScreen() {
  console.log("i have been called");
  document.body.querySelector("#placeButtons").textContent = "";
  document.getElementById("Heading").textContent = "High Scores!";
  submitName.style.visibility = "hidden";
  usersName.style.visibility = "hidden";
  // startEl.style.visibility = "Visible";
  document.getElementById("HighScores").style.backgroundColor = "#white";

  for (let i = 0; i < highScoreList.length; i++) {
    var UserName = highScoreList[i].name;
    var setScore = highScoreList[i].score;

    makeHighScore.appendChild(document.createElement("li")).textContent =
      UserName + " -" + setScore;
  }
}

function startQuiz() {
  questionAmount = questionAmount - 1;

  if (questionAmount <= 0) {
    submitScore();
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

// scoreButton.addEventListener("click", highScoreScreen);

// submitName.addEventListener("click", highScoreScreen);
