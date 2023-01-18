import {
  form,
  eMail,
  form_Control,
  passWord,
  passWord2,
  userName,
  emailIdentity,
  passWordIdentity,
  userNameIdentity,
  LoginPassword,
  LoginEMail,
} from "./variables.js";

import { setError, setSuccess } from "./error.js";

// VALIDATING USERNAME INPUT
const validateUsernameInputs = () => {
  const userNameValue = userName.value.trim();

  if (userNameValue === "") {
    setError(userName, "Username is required");
  } else if (userNameValue.length < 3 || userNameValue.length > 15) {
    setError(userName, "Username must be between 3 and 15 characters");
  } else {
    setSuccess(userName);
    localStorage.setItem("username", userName.value);
  }
};

// VALIDATING EMAIL INPUTS
const validateEmailInputs = () => {
  const eMailValue = eMail.value.trim();

  if (eMailValue === "") {
    setError(eMail, "Email is required");
  } else if (!eMailValue.includes("@") && !eMailValue.includes(".")) {
    setError(eMail, "Enter a valid email address");
  } else if (eMailValue.includes("@") && eMailValue.includes(".")) {
    setSuccess(eMail);
    localStorage.setItem("email", eMail.value);
  }
};

// VALIDATING PASSWORD INPUTS
const validatePasswordInputs = () => {
  const passWordValue = passWord.value.trim();

  if (passWordValue === "") {
    setError(passWord, "Please provide a password");
  } else if (passWordValue.length < 8 || passWordValue.length > 15) {
    setError(passWord, "Password must be between 8 and 15 characters");
  } else {
    setSuccess(passWord);
    localStorage.setItem("password", passWord.value);
  }
};

// VALIDATING PASSWORD2 INPUTS
const validatePassword2Inputs = () => {
  const passWordValue = passWord.value.trim();
  const passWord2Value = passWord2.value.trim();

  if (passWord2Value === "") {
    setError(passWord2, "Please confirm your password");
  } else if (passWord2Value !== passWordValue) {
    setError(passWord2, "Passwords must match");
  } else {
    setSuccess(passWord2);
    localStorage.setItem("password2", passWord2.value);
  }
};

const validateEmailLogin = () => {
  const eMailValue = eMail.value.trim();
  if (eMailValue === "") {
    setError(eMail, "Please enter your email address");
  } else if (eMail.value !== emailIdentity) {
    setError(eMail, "The email address you entered is incorrect");
  } else if (eMail.value === emailIdentity) {
    setSuccess(eMail);
  }
};

const validatePasswordLogin = () => {
  const passWordValue = LoginPassword.value.trim();
  console.log(passWordValue, passWordIdentity);
  if (passWordValue === "") {
    setError(passWord, "Please enter your password");
  } else if (passWordValue < 8 || passWordValue > 15) {
    setError(passWord, "Password must be between 8 and 15 characters");
  } else if (passWordValue !== passWordIdentity) {
    setError(passWord, "The password you entered is incorrect");
  } else if (passWordValue === passWordIdentity) {
    setSuccess(passWord);
    console.log("Successful");
  }
};

const validateBoth = () => {
  if (
    LoginEMail.value === emailIdentity &&
    LoginPassword.value === passWordIdentity
  ) {
    setSuccess(eMail);
    setSuccess(passWord);
    setTimeout(() => {
      alert(`${userNameIdentity}, You have been logged in`);
    }, 1000);
  }
};

export {
  validateUsernameInputs,
  validateEmailInputs,
  validatePassword2Inputs,
  validatePasswordInputs,
};

export { validateEmailLogin, validatePasswordLogin, validateBoth };
