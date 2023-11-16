const loginForm = document.querySelector("form.login-form");
const email = document.querySelector("input#email");
const password = document.querySelector("input#password");
const button = document.querySelector('button');

loginForm.addEventListener("submit", handleSubmit);


function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email;
  const password = form.elements.password;
  
  if (email.value === "" || password.value === "") {
    //   return console.log("Wypełnij wszystkie pola!");
        alert("Wypełnij wszystkie pola!")
  }
    const Save = {
        Email: email.value,
        Password: password.value
    }
    console.log(Save);
  form.reset();
}

