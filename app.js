const quizForm = document.querySelector(".quiz");
const checkbtn = document.querySelector("#submit");
const result = document.querySelector("#output");

let correctAnswers = ["50°", "Obtuse", "30°", "Equivlateral", "Right-Angled"];

const calculateScore = () => {
  let score = 0;
  let arrayIndex = 0;
  let formData = new FormData(quizForm);
  for (let value of formData.values()) {
    if (value === correctAnswers[arrayIndex]) {
      score++;
    }
    arrayIndex++;
  }
  result.innerText = "Your score:" + score;
};

checkbtn.addEventListener("click", calculateScore);
