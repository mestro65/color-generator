const body = document.querySelector("body");
const input = document.getElementById("colorChooser");
const colorCode = document.getElementById("colorCode");

setColor();
input.addEventListener("input", setColor)

function setColor() {
    body.style.backgroundColor = input.value;
    colorCode.innerHTML = input.value;
}