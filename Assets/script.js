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
var questionAmount = Questions.length;
var questionsWereOn;
var num = 0;
var score = "";
var highScoreList = JSON.parse(localStorage.getItem("highScoreList")) || [];
var amountHighScores = 5;
var makeHighScore = document.getElementById("HighScores");
var playAgainButton = document.getElementById("playAgain");
var scoresSubmited = 0;
var time = 30;
var madePlayAgainButton = document.querySelector("#playAgain");

console.log(highScoreList);

usersName.style.visibility = "hidden";
submitName.style.visibility = "hidden";

function startTimer() {
  time = 30;
  var timeLeft = setInterval(function () {
    document.getElementById("timer").textContent = time;
    time--;
    if (time < 0 || questionAmount <= 0) {
      clearInterval(timeLeft);
      time=0
      goToSubmit();
    }
  }, 1000);
}

function goToSubmit() {
  console.log("goToSubmit Has occured");
  submitScore();
}
function submitScore() {
  document.body.querySelector("#placeButtons").textContent = "";
  document.getElementById("Heading").textContent = "Almost done !";
  usersName.style.visibility = "visible";
  submitName.style.visibility = "visible";
  //clear out form on load

  submitName.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    //clear out highscores
    var liLength = document.getElementById("HighScores").children.length;
    console.log("current lenght is " + liLength);

    var enteredName = document.getElementById("usersName").value;
    var score = timer.textContent;

    if (enteredName === "") {
      alert("Please enter your name to submit score!");
      submitScore();
      return;
    } else {
      console.log("a score has been pushed");
      const scoreAndName = {
        name: enteredName,
        score: score,
      };
      highScoreList.push(scoreAndName);

      // highScoreList.sort((a, b) => b.score - a.score);

      // highScoreList.splice(5);

      localStorage.setItem("highscores", JSON.stringify(highScoreList));

      console.log(highScoreList);

      highScoreScreen();
      return;
    }
  });
}
function highScoreScreen() {
  // scoresSubmited++;
  document.getElementById("HighScores").style.visibility = "visible";
  document.body.querySelector("#placeButtons").textContent = "";

  document.getElementById("Heading").textContent = "High Scores!";
  submitName.style.visibility = "hidden";
  usersName.style.visibility = "hidden";
  playAgainButton.style.visibility = "visible";
  console.log("The scores subbmited count is " + scoresSubmited);

  for (let i = 0; i < scoresSubmited; i++) {
    var UserName = highScoreList[i].name;
    var setScore = highScoreList[i].score;
    makeHighScore.appendChild(document.createElement("li")).textContent =
      UserName + " - " + setScore;
  }
}

function startQuiz() {
  //add a way to set questions back to full
  // questionAmount = questionAmount - 1;
  console.log("startQuize has run");
  playAgainButton.style.visibility = "hidden";
  if (questionAmount === 0) {
    scoresSubmited++;
    goToSubmit();
    return;
  }

  var currentQuestion = Questions[num];

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
      questionAmount--;
      console.log("the question amount is now" + questionAmount);
      startQuiz();
    } else {
      console.log("thats incorrect");
      time = time - 5;
      console.log("time is now " + time);
    }
  });

  answerArea.children[1].addEventListener("click", function () {
    userChoice = answerArea.children[1].getAttribute("status");
    if (userChoice === "Correct") {
      num++;
      questionAmount--;
      console.log("the question amount is now" + questionAmount);
      startQuiz();
    } else {
      console.log("thats incorrect");
      time = time - 5;
      console.log("time is now " + time);
    }
  });

  answerArea.children[2].addEventListener("click", function () {
    userChoice = answerArea.children[2].getAttribute("status");
    if (userChoice === "Correct") {
      num++;
      questionAmount--;
      console.log("the question amount is now" + questionAmount);
      startQuiz();
    } else {
      console.log("thats incorrect");
      time = time - 5;

      console.log("time is now " + time);
    }
  });

  answerArea.children[3].addEventListener("click", function () {
    userChoice = answerArea.children[3].getAttribute("status");
    if (userChoice === "Correct") {
      num++;
      questionAmount--;
      console.log("the question amount is now" + questionAmount);
      startQuiz();
    } else {
      console.log("thats incorrect");
      time = time - 5;
      console.log("time is now " + time);
    }
  });
}

function thisMakesRestart() {
  madePlayAgainButton.appendChild(
    document.createElement("button")
  ).textContent = "Play Again";
}

startEl.addEventListener("click", () => {
  startQuiz();
  startTimer();
  thisMakesRestart();
});

playAgainButton.addEventListener("click", function (event) {
  questionAmount = 3;
  event.stopPropagation;
  var liLength = document.getElementById("HighScores").children.length;
  document.getElementById("HighScores").style.visibility = "hidden";
  console.log(liLength);
  for (let i = 0; i < liLength; i++) {
    makeHighScore.children[i].setAttribute("id", "listItem");
    var findLIS = document.getElementById("listItem");
    console.log(findLIS);
    findLIS.remove();
  }

  num = 0;
  startQuiz();
  startTimer();
  return;
});
