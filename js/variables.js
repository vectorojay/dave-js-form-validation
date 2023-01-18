// STORING CLASS TARGETS IN VARIABLES
const form = document.querySelector("#form");
const userName = document.querySelector("#username");
const eMail = document.querySelector("#email");
const passWord = document.querySelector("#password");
const passWord2 = document.querySelector("#password2");
const form_Control = document.querySelectorAll(".form-control");

const emailIdentity = localStorage.getItem("email");
const passWordIdentity = localStorage.getItem("password");
const userNameIdentity = localStorage.getItem("username");

const LoginEMail = document.getElementById("email");
const LoginPassword = document.getElementById("password");
const LoginBtn = document.querySelector("button");

export {
  form,
  userName,
  eMail,
  passWord,
  passWord2,
  form_Control,
  emailIdentity,
  passWordIdentity,
  userNameIdentity,
  LoginBtn,
  LoginEMail,
  LoginPassword,
};
