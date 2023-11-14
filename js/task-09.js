function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
const button = document.querySelector("button.change-color");
const nameColor = document.querySelector("span.color");
const body = document.querySelector('body');

button.addEventListener("click", () => {
  let newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  nameColor.textContent = newColor;
});