const currentValue = document.querySelector("#value");
const buttonPlus = document.querySelector('button[data-action="increment"]');
const buttonMinus = document.querySelector('button[data-action="decrement"]');
let counterValue = 0;

function incrementVal() {
    counterValue += 1;
    currentValue.textContent = counterValue;
};

function decrementVal() {
    counterValue -= 1;
    currentValue.textContent = counterValue;
};

buttonPlus.addEventListener("click", incrementVal);
buttonMinus.addEventListener("click", decrementVal);




