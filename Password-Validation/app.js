const min8 = document.querySelector("#min8 i");
const num2 = document.querySelector("#num2 i");
const spChar = document.querySelector("#spChar i");
const showpassword = document.querySelector("#showpassword");
const password = document.querySelector("#password");

showpassword.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    showpassword.classList.add("fa-eye-slash");
    showpassword.classList.remove("fa-eye");
  } else {
    password.type = "password";
    showpassword.classList.remove("fa-eye-slash");
    showpassword.classList.add("fa-eye");
  }
});

function PasswordValue() {
  const pass = document.querySelector("input").value;
  if (pass.length >= 8) {
    min8.classList.remove("fa-dot-circle");
    min8.classList.add("fa-circle-check");
  } else {
    min8.classList.add("fa-dot-circle");
    min8.classList.remove("fa-circle-check");
  }
  if (pass.replace(/\D/g, "").length > 1) {
    num2.classList.remove("fa-dot-circle");
    num2.classList.add("fa-circle-check");
  } else {
    num2.classList.add("fa-dot-circle");
    num2.classList.remove("fa-circle-check");
  }
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if (specialChars.test(pass)) {
    spChar.classList.remove("fa-dot-circle");
    spChar.classList.add("fa-circle-check");
  } else {
    spChar.classList.add("fa-dot-circle");
    spChar.classList.remove("fa-circle-check");
  }
}
