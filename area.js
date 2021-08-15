const base = document.querySelector("#base");
const height = document.querySelector("#height");
const checkbtn = document.querySelector("#check");
const displayResult =  document.querySelector("#display-result");

checkbtn.addEventListener("click",calculateArea);

function calculateArea() {
    const baseVal = Number(base.value);
    const heightVal = Number(height.value);
   let area = 1/2 * baseVal * heightVal;

    displayResult.innerText = "Area of triangle is "+ area;
}