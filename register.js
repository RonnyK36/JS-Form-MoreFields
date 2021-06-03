const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const phone = document.getElementById("phone");
const city = document.getElementById("city");
const lastName = document.getElementById("lastName");
const zip = document.getElementById("zip");
const state = document.getElementById("state");
const submit = document.getElementById("submit");

const checkbox = document.querySelector("input[name=checkbox]");
// on click it should call checkValidity func
checkbox.addEventListener("change", (e) => {
  e.preventDefault();
  if (checkbox.checked) {
    checkValidity();
  } else {
    console.log("click check");
  }
});

// check for invalid errors
function checkValidity() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  const phoneValue = phone.value.trim();
  const cityValue = city.value.trim();
  const zipValue = zip.value.trim();
  const stateValue = state.value.trim();

  if (firstNameValue === "") {
    // show that there is an error
    setErrorClass(firstName, "Firstname cannot be blank");
  } else {
    // add success class
    setSuccessClass(firstName);
  }
  if (lastNameValue === "") {
    // show that there is an error
    setErrorClass(lastName, "Lastname cannot be blank");
  } else {
    // add success class
    setSuccessClass(lastName);
  }
  if (zipValue === "") {
    // show that there is an error
    setErrorClass(zip, "Please provide a zip code");
  } else {
    // add success class
    setSuccessClass(zip);
  }
  if (cityValue === "") {
    // show that there is an error
    setErrorClass(city, "Please provide a zip code");
  } else {
    // add success class
    setSuccessClass(city);
  }
  if (stateValue.selectedValue !== 0) {
    // show that there is an error
    setSuccessClass(state);
  } else {
    // add success class
    setErrorClass(state, "Please select a State.");
  }

  if (passwordValue === "") {
    // show that there is an error
    setErrorClass(password, "Password cannot be blank");
  } else {
    // add success class
    setSuccessClass(password);
  }
  if (password2Value === "") {
    // show that there is an error
    setErrorClass(password2, "Password cannot be blank");
  } else if (passwordValue !== password2Value) {
    setErrorClass(password2, "Passwords must match");
  } else {
    // add success class
    setSuccessClass(password2);
  }
  if (phoneValue === "") {
    // show that there is an error
    setErrorClass(phone, "Email cannot be blank");
  } else {
    // add success class
    setSuccessClass(phone);
  }
  if (emailValue === "") {
    // show that there is an error
    setErrorClass(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorClass(email, "Email is not valid");
  } else {
    // add success class
    setSuccessClass(email);
  }
}

function setErrorClass(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  // setting the error message
  small.innerText = message;
  // add error setErrorClass
  formControl.className = "form-control error";
}

function setSuccessClass(input) {
  const formControl = input.parentElement;

  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,6}$/.test(email);
  //   /^(([^<>()\[\]\\.,;:\s@"+(\.[^<>()\[])]]))
}

form.addEventListener("click", (e) => {
  if (checkbox === true) {
    console.log("Here goes the click action");
  }
});
