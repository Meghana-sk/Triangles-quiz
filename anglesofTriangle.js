const angles = document.querySelectorAll(".angle");

const checkbtn = document.querySelector("#check");

const result = document.querySelector("#display-result");

checkbtn.addEventListener("click",checkAnglesOfTriangle);

function checkAnglesOfTriangle() {

    if(Number(angles[0].value) + Number(angles[1].value) + Number(angles[2].value) === 180) 
    {
        result.innerText = "Yay. You've entered angles of a triangle"
    } else {
        result.innerText = "No. Angles you have inputted are not angles of triangle"
    }
}