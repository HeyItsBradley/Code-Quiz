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
    title: "Second Questions title",
    choices: ["Choice A", "Choice B", "Choices C", "Choices D"],
    answer: "Choice D",
  },
];

var timer = document.getElementById("timer");
var time = 0;
var answerArea = document.getElementById("placeButtons");
var makeBtn = document.body.querySelector("#placeButtons");

function startQuiz() {
  timer.textContent = 70;
  const randomChoice = Math.floor(Math.random() * Questions.length);
  const currentQuestion = Questions[randomChoice];
  //set title to the question
  headerEl.textContent = currentQuestion.title;
  //hide start button
  startEl.style.visibility = "hidden";
  startText.style.visibility = "hidden";
  //make 4 buttons with different answer choice
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

  //make it so the one with the option === true, get set to data attribute statusof CorrectAnswer
  //else, set to data attripute status of WrongAnswer
  //FIX THIS
  console.log("children are " + answerArea.children[0].textContent);
  console.log("current answre is " + currentQuestion.answer);
  for (let i = 0; i < answerArea.children.length; i++) {
    if (answerArea.children[i].textContent === currentQuestion.answer) {
      answerArea.children[i].setAttribute("status", "Correct");
      console.log("Hey!");
    } else {
      answerArea.children[i].setAttribute("status", "Wrong");
    }
  }

  answerArea.children[0].setAttribute("option", "1");
  answerArea.children[1].setAttribute("option", "2");
  answerArea.children[2].setAttribute("option", "3");
  answerArea.children[3].setAttribute("option", "4");

  console.log(answerArea.children[0].attributes.answer);
  console.log(answerArea.children[1].attributes.answer);
  console.log(answerArea.children[2].attributes.answer);
  console.log(answerArea.children[3].attributes.answer);

  console.log(answerArea.children[0].attributes.status);
  console.log(answerArea.children[1].attributes.status);
  console.log(answerArea.children[2].attributes.status);
  console.log(answerArea.children[3].attributes.status);

  console.log(answerArea.children[0].attributes.option);
  console.log(answerArea.children[1].attributes.option);
  console.log(answerArea.children[2].attributes.option);
  console.log(answerArea.children[3].attributes.option);

  answerArea.children[0].addEventListener("click", function () {
    userChoice = answerArea.children[0].getAttribute("status");
    if (userChoice === "Correct") {
      console.log(userChoice);
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
      console.log(userChoice);
      console.log("ya thats right !");
      startQuiz();
    } else {
      console.log("did not work");
    }
    console.log(userChoice);
  });
  answerArea.children[2].addEventListener("click", function () {
    userChoice = answerArea.children[2].getAttribute("status");
    if (userChoice === "Correct") {
      console.log(userChoice);
      console.log("ya thats right !");
      startQuiz();
    } else {
      console.log("did not work");
    }
    console.log(userChoice);
  });
  answerArea.children[3].addEventListener("click", function () {
    userChoice = answerArea.children[3].getAttribute("status");
    if (userChoice === "Correct") {
      console.log(userChoice);
      console.log("ya thats right !");
      startQuiz();
    } else {
      console.log("did not work");
    }
    console.log(userChoice);
  });
}

startEl.addEventListener("click", startQuiz);
