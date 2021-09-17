const sideA = document.querySelector("#side-1");
const sideB = document.querySelector("#side-2");
const checkbtn = document.querySelector("#check");
const displayResult =  document.querySelector("#display-result");

checkbtn.addEventListener("click",calculateHypotenuse);

function calculateHypotenuse() {
    const sideAVal = Number(sideA.value);
    const sideBVal = Number(sideB.value);
    if (sideAVal > 0 && sideBVal > 0) {
    let hypotenuse = Math.sqrt((sideAVal*sideAVal) + (sideBVal*sideBVal)).toFixed(2);
    displayResult.innerText = "Hypotenuse is "+ hypotenuse;
    } else {
        displayResult.innerText = "Enter valid values for sides of triangle";
    }
}