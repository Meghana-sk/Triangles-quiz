const angle1 = document.querySelector("#angle1").value;
const angle2 = document.querySelector("#angle2").value;
const angle3 = document.querySelector("#angle3").value;
const checkbtn = document.querySelector("#check");
const isAngleOfTriangle = document.querySelector("#angles-of-triangle");
// console.log("hi",angle1,angle2,angle3)


checkbtn.addEventListener("click",checkAnglesOfTriangle);


function checkAnglesOfTriangle() {
    if (parseFloat(angle1) + parseFloat(angle2) + parseFloat(angle3) === 180) {
        console.log("Yay. angles of triangle")
    } else {
        console.log("Nah. not angles of triangle")
    }
}