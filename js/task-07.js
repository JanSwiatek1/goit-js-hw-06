const line = document.querySelector("input#font-size-control");
const textForm = document.querySelector("span#text");
textForm.style.fontSize = '50px'

const changeSize = () => {
     const size = line.value;
     textForm.style.fontSize = `${size}px`;
};

line.addEventListener("input", changeSize);



