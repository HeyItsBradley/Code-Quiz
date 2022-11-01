var startEl = document.querySelector("#startButton");
var headerEl = document.querySelector("#Heading");
var Questions = [
  {
    title: "First Questions title",
    choices: ["Choice A", "Choice B", "Choices C"],
    answer: "Choice B",
  },
  {
    title: "First Questions title",
    choices: ["Choice A", "Choice B", "Choices C"],
    answer: "Choice B",
  },
];
var timer = document.getElementById("timer");
var time = 0;

function startQuiz() {
  timer.textContent = 70;
  headerEl.textContent = "Go!!!";
  console.log;
}

startEl.addEventListener("click", startQuiz);

//  
