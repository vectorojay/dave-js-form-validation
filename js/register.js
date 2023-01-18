// STORING CLASS TARGETS IN VARIABLES
const form = document.querySelector("#form");
const userName = document.querySelector("#username");
const eMail = document.querySelector("#email");
const passWord = document.querySelector("#password");
const passWord2 = document.querySelector("#password2");

  // SUBMIT BUTTON RESPONSE
  form.addEventListener("submit", (e) => {
    // PREVENTING FORM SUBMISSION ON DEFAULT
    e.preventDefault();

  // VALIDATING ON SUBMIT
  setTimeout(validateUsernameInputs, 3000);
  setTimeout(validateEmailInputs, 3000);
  setTimeout(validatePasswordInputs, 3000);
  setTimeout(validatePassword2Inputs, 3000);
});

// SETTING ERROR MESSAGES
const setError = (element, message) => {
  const formControl = element.parentElement;
  const errorDisplay = formControl.querySelector("small");

  errorDisplay.innerText = message;
  formControl.classList.add("error");
  formControl.classList.remove("success");
};

// SETTING SUCCESS MESSAGES
const setSuccess = (element, message) => {
  const formControl = element.parentElement;
  const errorDisplay = formControl.querySelector("small");

  errorDisplay.innerText = "";
  formControl.classList.remove("error");
  formControl.classList.add("success");
};

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
  } else {
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

// VALIDATING PASSWORD@ INPUTS
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

// SETTING VALIDATION MESSAGE 2 SECONDS AFTER USER LEAVES INPUT BOX
userName.addEventListener("change", (e) => {
  setTimeout(validateUsernameInputs, 2000);
});

  eMail.addEventListener("change", (e) => {
    setTimeout(() => validateEmailInputs(), 2000);
  });

  passWord.addEventListener("change", (e) => {
    setTimeout(() => validatePasswordInputs(), 2000);
  });

  passWord2.addEventListener("change", (e) => {
    setTimeout(() => validatePassword2Inputs(), 2000);
  });
};

validateForm();
