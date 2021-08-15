const sideA = document.querySelector("#side-1");
const sideB = document.querySelector("#side-2");
const checkbtn = document.querySelector("#check");
const displayResult =  document.querySelector("#display-result");

checkbtn.addEventListener("click",calculateHypotenuse);

function calculateHypotenuse() {
    const sideAVal = Number(sideA.value);
    const sideBVal = Number(sideB.value);
    let hypotenuse = Math.sqrt((sideAVal*sideAVal) + (sideBVal*sideBVal));

    displayResult.innerText = "Hypotenuse is "+ hypotenuse;
}