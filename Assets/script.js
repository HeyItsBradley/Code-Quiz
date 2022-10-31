var startEl = document.querySelector("#startButton");
var headerEl = document.querySelector("#Heading");

function startQuiz() {
  headerEl.textContent = "Go!!!";
}

startEl.addEventListener("click", function () {
  alert("Hello");
});
