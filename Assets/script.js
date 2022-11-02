var startEl = document.querySelector("#startButton");
var headerEl = document.querySelector("#Heading");
var startText = document.getElementById("text");
var Questions = [
  {
    title: "First Questions title",
    choices: ["Choice A", "Choice B", "Choices C", "Choices D"],
    answer: "Choice B",
  },
  {
    title: "Second Questions title",
    choices: ["Choice A", "Choice B", "Choices C", "Choices D"],
    answer: "Choice B",
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
  var A1 = (makeBtn.appendChild(document.createElement("button")).textContent =
    currentQuestion.choices[0]);

  var A2 = (makeBtn.appendChild(document.createElement("button")).textContent =
    currentQuestion.choices[1]);

  var A3 = (makeBtn.appendChild(document.createElement("button")).textContent =
    currentQuestion.choices[2]);

  var A4 = (makeBtn.appendChild(document.createElement("button")).textContent =
    currentQuestion.choices[3]);

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
  console.log("children are" + answerArea.children[0].textContent);
  for (let i = 0; i < answerArea.children.length; i++) {
    if (answerArea.children[i].textContent === currentQuestion.answer) {
      answerArea.children[i].setAttribute("status", "Correct");
      console.log("Hey!");
      
    } else {
      answerArea.children[i].setAttribute("status", "Wrong");
    }
  }
  console.log(answerArea.children[0].attributes.answer);
  console.log(answerArea.children[1].attributes.answer);
  console.log(answerArea.children[2].attributes.answer);
  console.log(answerArea.children[3].attributes.answer);

  console.log(answerArea.children[0].attributes.status);
  console.log(answerArea.children[1].attributes.status);
  console.log(answerArea.children[2].attributes.status);
  console.log(answerArea.children[3].attributes.status);

  //add event listener
  //if children is clicked on and status is not correct, then take away time
  //if it is correct, start next question protocall
  var optionSelect = answerArea.children
  optionSelect.addEventListener("click",checkAnswer )

  
}

startEl.addEventListener("click", startQuiz);

function checkAnswer(event) {
  if (event) {

    console.log(ytay)
  }
}
