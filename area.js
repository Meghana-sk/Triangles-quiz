const base = document.querySelector("#base");
const height = document.querySelector("#height");
const checkbtn = document.querySelector("#check");
const displayResult = document.querySelector("#display-result");

const calculateArea = () => {
  if (base.value > 0 && height.value > 0) {
    const baseVal = Number(base.value);
    const heightVal = Number(height.value);
    let area = (1 / 2) * baseVal * heightVal;

    displayResult.innerText =
      "Area of triangle is " + area.toFixed(2) + " square cm";
  } else {
    displayResult.innerText = "Enter valid base and height";
  }
};

checkbtn.addEventListener("click", calculateArea);
