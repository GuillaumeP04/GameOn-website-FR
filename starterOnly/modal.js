// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModal = document.getElementsByClassName("close")[0];
let form = document.querySelector('form');
let firstName = document.getElementById('first');
let lastName = document.getElementById('last');
let email = document.getElementById('email');
let birthdate = document.getElementById('birthdate');
let numPart = document.querySelector("input[type=number]");
let submitBtn = document.getElementById('btn-submit');
let locationCheckbox = document.querySelectorAll("input[name=location]");
let conditionsCheckbox = document.querySelectorAll("input[name='conditions']");
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal form
closeModal.onclick = function() {
  modalbg.style.display = "none";
};

// submit button
  // submitBtn.disabled = true;
  // submitBtn.style.opacity = '0.5';
  // submitBtn.style.cursor = 'not-allowed';

// form validation listener
form.addEventListener('submit', submitForm);

firstName.addEventListener('input', firstNameValidation);

lastName.addEventListener('input', lastNameValidation);

email.addEventListener('input', emailValidation);
  
birthdate.addEventListener('input', birthdateValidation);

numPart.addEventListener('input', numPartValidation);

// locationCheckbox.addEventListener('change', locationValidation);

for (let i = 0 ; i < locationCheckbox.length; i++) {
  locationCheckbox[i].addEventListener('change' , locationValidation) ; 
}

for (let i = 0 ; i < conditionsCheckbox.length; i++) {
  conditionsCheckbox[i].addEventListener('change' , conditionsValidation) ; 
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// form validation
function firstNameValidation () {
  let valid = false;
  let firstName = document.getElementById('first');
  let parent = firstName.closest('div');
  if (firstName.value.length < 2) {
    showError(parent);
  } else if (firstName.value.length > 15) {
    showError(parent);
  } else {
    hideError(parent);
    valid = true;
  }
  return valid;
}

function lastNameValidation () {
  let valid = false;
  let lastName = document.getElementById('last');
  let parent = lastName.closest('div');
  if (lastName.value.length < 2) {
    showError(parent);
  } else {
    hideError(parent);
    valid = true;
  }
  return valid;
}

function emailValidation () {
  let valid = false;
  let email = document.getElementById('email');
  let parent = email.closest('div');
  if (email.value.indexOf('@') == -1) {
    showError(parent);
  } 
  if (email.value.indexOf('.') == -1) {
    showError(parent);
  }
  if ((email.value.indexOf("@") != -1) && (email.value.indexOf(".") != -1)) {
    hideError(parent);
    valid = true;
  }
  return valid;
}

function birthdateValidation () {
  let valid = false;
  let birthdate = document.getElementById('birthdate');
  let parent = birthdate.closest('div');
  if (birthdate.value.length < 8) {
    showError(parent);
  } else {
    hideError(parent);
    valid = true;
  }
  return valid;
}

function numPartValidation () {
  let valid = false;
  let numPart = document.querySelector("input[type=number]");
  let parent = numPart.closest('div');
  if (numPart.value == '') {
    showError(parent);
  } else {
    hideError(parent);
    valid = true;
  }
  return valid;
}

function locationValidation () {
  let valid = false;
  let locationCheckbox = document.querySelectorAll("input[name=location]");
  let parent = locationCheckbox.closest('div');
  if (!locationCheckbox.checked) {
    showError(parent);
  } else {
    hideError(parent);
    valid = true;
  }
  return valid;
}

function conditionsValidation () {
  let valid = false;
  let conditionsCheckbox = document.querySelector("input[name=conditions]");
  let parent = conditionsCheckbox.closest('div');
  showError(parent);
  if (!conditionsCheckbox.checked) {
    showError(parent);
  } else {
    hideError(parent);
    valid = true;
  }
  return valid;
}

function submitForm() {
  submitBtn.disabled = true;
  submitBtn.style.opacity = '0.5';
  submitBtn.style.cursor = 'not-allowed';
  let isFirstNameValid = firstNameValidation(),
      isLastNameValid = lastNameValidation(),
      isEmailValid = emailValidation(),
      isBirthdateValid = birthdateValidation(),
      isNumPartValid = numPartValidation(),
      isLocationValid = locationValidation(),
      isConditionsValid = conditionsValidation();
  let isFormValid = isFirstNameValid && 
  isLastNameValid && isEmailValid &&
  isBirthdateValid && isLocationValid &&
  isNumPartValid && isConditionsValid;
  
  if (isFormValid) {
    submitBtn.disabled = false;
    submitBtn.style.opacity = '1';
    submitBtn.style.cursor = 'pointer';
  }
}

function showError(el) {
  el.setAttribute('data-error-visible', true)
}

function hideError(el) {
  el.setAttribute('data-error-visible', false)
}

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}