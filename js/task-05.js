const nameInput = document.querySelector("input#name-input");
const output = document.querySelector("span#name-output");

output.textContent = "Anonymous";
nameInput.addEventListener("input", (event) => {
    output.textContent = event.currentTarget.value;
    
    if (event.currentTarget.value === "") {
    output.textContent = "Anonymous";
}
});
