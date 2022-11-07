const input = document.querySelector(".input")
const ghost = document.querySelector(".ghost")

const handleInput = (ev) => {
    ghost.style.visibility = 'visible';
};

const handleInput1 = (ev) => {
    ghost.style.visibility = 'hidden';
};

input.addEventListener("focus", handleInput)
input.addEventListener("focusout", handleInput1)
