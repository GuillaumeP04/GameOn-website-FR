// DOM Elements
<<<<<<< HEAD
let modalbg = document.querySelector(".bground");
let modalBtn = document.querySelectorAll(".modal-btn");
let closeModal = document.getElementsByClassName("close")[0];
=======
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModal = document.getElementsByClassName("close")[0];
let form = document.querySelector('form');
>>>>>>> 6d8a52c099d49837c2b8dffca320f5f624cd9828
let firstName = document.getElementById('first');
let lastName = document.getElementById('last');
let email = document.getElementById('email');
let birthdate = document.getElementById('birthdate');
let numPart = document.querySelector("input[type=number]");
let submitBtn = document.getElementById('btn-submit');
<<<<<<< HEAD
let locationCheckboxes = document.querySelector("input[name='location']");
let conditionsCheckboxes = document.querySelector("input[name='conditions']");


modalFormLaunch();
modalFormClose();
disableSubmitBtn();
// form validation listener
document.querySelector('form').addEventListener('change', isFormValid);
// document.querySelector('form').addEventListener('submit', submitForm);
firstName.addEventListener('input', isFirstNameValid);
lastName.addEventListener('input', isLastNameValid);
email.addEventListener('input', isEmailValid); 
birthdate.addEventListener('input', isBirthdateValid); 
numPart.addEventListener('input', isNumPartValid);
locationCheckboxes.addEventListener('change', isLocationValid);
conditionsCheckboxes.addEventListener('change', isConditionsValid);

// for (let i = 0 ; i < locationCheckboxes.length; i++) {
//   locationCheckboxes[i].addEventListener('change' , isLocationValid) ; 
// }

// for (let i = 0 ; i < conditionsCheckboxes.length; i++) {
//   conditionsCheckboxes[i].addEventListener('change' , isConditionsValid) ; 
// }


// form validation
function isFirstNameValid () {
  let parent = firstName.closest('div');
  showError(parent);
  if (firstName.value.length < 2) {
    return false;
  } 

  if (firstName.value.length > 15) {
    return false;
  } 

    hideError(parent);
    return true;
}

function isLastNameValid () {
  let parent = lastName.closest('div');
  showError(parent);

  if (lastName.value.length < 2) {
    return false
  }

  hideError(parent);
  return true;
}

function isEmailValid () {
  let parent = email.closest('div');
  showError(parent);
  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(reserve.email.value)) {
    return false;
  }
  hideError(parent);
  return true;


}

function isBirthdateValid () {
  let parent = birthdate.closest('div');
  showError(parent);
  // let regex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
  if (!/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/.test(reserve.birthdate.value)) {
    return false;
  }
  hideError(parent);
  return true;
}

function isNumPartValid () {
  let parent = numPart.closest('div');
  showError(parent);
  if (numPart.value < '0') {
    return false;
  } 
    hideError(parent);
    return true;
}

// function isLocationValid () {
//   let parent = locationCheckboxes.closest('div');
//   showError(parent);
//   let c = -1;
//   for (let i=0; i < locationCheckboxes.length; i++) {
//     if (locationCheckboxes[i].checked) {
//        c = i;
//       hideError(parent);
//       return true; 
//     }
//     if (c == -1) {
//       showError(parent);
//       return false;
//     }
//  }
// }

=======
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
>>>>>>> 6d8a52c099d49837c2b8dffca320f5f624cd9828

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

<<<<<<< HEAD
function isLocationValid () {
  let parent = locationCheckboxes.closest('div');
  showError(parent);
    if (!locationCheckboxes.checked) {
      console.log(123)
      return false;
    }
    hideError(parent);
    return true;
=======
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
>>>>>>> 6d8a52c099d49837c2b8dffca320f5f624cd9828
}
    

<<<<<<< HEAD
function isConditionsValid () {
  let parent = conditionsCheckboxes.closest('div');
  showError(parent);
  if (!conditionsCheckboxes.checked) {
    return false;
  } 
    hideError(parent);
    return true;
}

function isFormValid() {

  if (isFirstNameValid ()
      && isLastNameValid ()
      && isEmailValid ()
      && isBirthdateValid ()
      && isNumPartValid ()
      && isLocationValid ()
      && isConditionsValid()) 
      {
        enableSubmitBtn();
        return true;
      }
      disableSubmitBtn();
      return false;

}

function showError(el) {
  el.setAttribute('data-error-visible', true);
=======
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
>>>>>>> 6d8a52c099d49837c2b8dffca320f5f624cd9828
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

function disableSubmitBtn () {
  submitBtn.disabled = true;
  submitBtn.style.opacity = '0.5';
  submitBtn.style.cursor = 'not-allowed';
}

function enableSubmitBtn () {
  submitBtn.disabled = false;
  submitBtn.style.opacity = '1';
  submitBtn.style.cursor = 'pointer';
}

function modalFormLaunch () {
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
}

function modalFormClose () {
  closeModal.onclick = function() {
  modalbg.style.display = "none";
  };
}

function launchModal() {
  modalbg.style.display = "block";
}