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

export { setError, setSuccess };
