import { setError, setSuccess } from "./error.js";
import {
  validateEmailLogin,
  validatePasswordLogin,
  validateBoth,
} from "./validate.js";
import { userNameIdentity } from "./variables.js";

// const eMail = document.getElementById("email");
// const passWord = document.getElementById("password");
// const btn = document.querySelector("button");

// const emailIdentity = localStorage.getItem("email");
// const passWordLogin = localStorage.getItem("password");
// const userNameIdentity = localStorage.getItem("username");

const emailIdentity = localStorage.getItem("email");
const passWordLogin = localStorage.getItem("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateEmailLogin();
  validatePasswordLogin();
  const validated = validateBoth();
  if (validated) {
    console.log(validated);
    setTimeout(() => {
      alert(`${userNameIdentity}, You have been logged in`);
    }, 1000);
  }
});

// const setError = (element, message) => {
//   const formControl = element.parentElement;
//   const errorDisplay = formControl.querySelector("small");

  errorDisplay.innerText = message;
  formControl.classList.add("error");
};

// const setSuccess = (element, message) => {
//   const formControl = element.parentElement;
//   const errorDisplay = formControl.querySelector("small");

//   errorDisplay.innerText = "";
//   formControl.classList.remove("error");
//   formControl.classList.add("success");
// };

// const validateEmailLogin = () => {
//   const eMailValue = eMail.value.trim();
//   if (eMailValue === "") {
//     setError(eMail, "Please enter your email address");
//   } else if (eMail.value !== emailIdentity) {
//     setError(eMail, "The email address you entered is incorrect");
//   } else if (eMail.value === emailIdentity) {
//     setSuccess(eMail);
//   }
// };

const validatePasswordLogin = () => {
  const passWordValue = passWord.value.trim();
  if (passWordValue === "") {
    setError(passWord, "Please enter your password");
  } else if (passWordValue < 8 || passWordValue > 15) {
    setError(passWord, "Password must be between 8 and 15 characters");
  } else if (passWordValue !== passWordLogin) {
    setError(passWord, "The password you entered is incorrect");
  } else if (passWordValue === passWordLogin) {
    setSuccess(passWord);
  }
};

const validateBoth = () => {
  if (eMail.value === emailIdentity && passWord.value === passWordLogin) {
    setSuccess(eMail);
    setSuccess(passWord);
    alert("Success! You have been logged in!");
  }
};
