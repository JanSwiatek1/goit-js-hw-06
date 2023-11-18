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
  

  const Save = {
      Email: email.value,
      Password: password.value
  }

  
  if (email.value !== '' && password.value !== ''){     
      console.log("Poprawne haslo");
      form.reset();

  }
  else {
    alert("Wypełnij wszystkie pola!")
  }
}
  const Save = {
      Email: email.value,
      Password: password.value
  }
  console.log(Save);
// if (formMail.value !== "" && formPass.value !== "")
// else 
// if (email.value === "" || password.value === "") {
//       alert("Wypełnij wszystkie pola!")
//   }