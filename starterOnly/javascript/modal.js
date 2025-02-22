// DOM Elements
let modalBody = document.querySelector(".modal-body");
let modalbg = document.querySelector(".bground");
let modalBtn = document.querySelectorAll(".modal-btn");
let closeModal = document.getElementsByClassName("close")[0];
let firstName = document.getElementById('first');
let lastName = document.getElementById('last');
let email = document.getElementById('email');
let birthdate = document.getElementById('birthdate');
let numPart = document.querySelector("input[type=number]");
let submitBtn = document.getElementById('btn-submit');
let locationCheckboxes = document.querySelectorAll("input[name='location']");
let conditionsCheckboxes = document.querySelector("input[name='conditions']");

modalFormLaunch();
modalFormClose();
disableSubmitBtn();

// event listener
document.querySelector('form').addEventListener('change', isFormValid);
document.querySelector('form').addEventListener('submit', submitForm);
firstName.addEventListener('input', isFirstNameValid);
lastName.addEventListener('input', isLastNameValid);
email.addEventListener('input', isEmailValid); 
birthdate.addEventListener('input', isBirthdateValid); 
numPart.addEventListener('input', isNumPartValid);
for (checkbox of locationCheckboxes) {
  checkbox.addEventListener('change', isLocationValid);
}
conditionsCheckboxes.addEventListener('change', isConditionsValid);


// functions
function closeBtn() {
  let btn = document.createElement("BUTTON");     
  btn.innerHTML = "Fermer";                   
  document.querySelector('.modal-body').appendChild(btn);
  btn.className = "btn-submit";
  btn.style.marginTop = "50px"
  btn.onclick = function() {
    modalbg.style.display = "none";
    };
}

function disableSubmitBtn () {
  submitBtn.disabled = true;
  submitBtn.style.opacity = '0.5';
  submitBtn.style.cursor = 'not-allowed';
}

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function enableSubmitBtn () {
  submitBtn.disabled = false;
  submitBtn.style.opacity = '1';
  submitBtn.style.cursor = 'pointer';
}

function hideError(el) {
  el.setAttribute('data-error-visible', false)
}

function isBirthdateValid () {
  let parent = birthdate.closest('div');
  let selectedDate = new Date(birthdate.value);
  let now = new Date();
  showError(parent);
  if (!/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/.test(reserve.birthdate.value)) {
    return false;
  }

  if (selectedDate > now) {
    return false;
  }

  hideError(parent);
  return true;
}

function isConditionsValid () {
  let parent = conditionsCheckboxes.closest('div');
  showError(parent);
  if (!conditionsCheckboxes.checked) {
    return false;
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

function isFirstNameValid () {
  let parent = firstName.closest('div');
  showError(parent);
  if (firstName.value.length < 2) {
    return false;
  } 

  if (firstName.value.length > 15) {
    return false;
  }
  
  if (!/^([^0-9]*)$/.test(firstName.value)) {
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

function isLastNameValid () {
  let parent = lastName.closest('div');
  showError(parent);

  if (lastName.value.length < 2) {
    return false
  }

  if (!/^([^0-9]*)$/.test(lastName.value)) {
    return false;
  }

  hideError(parent);
  return true;
}

function isLocationValid () {
  let parent = checkbox.closest('div');
  showError(parent);
  for (checkbox of locationCheckboxes) {
    // console.log(checkbox);
    if (checkbox.checked) {
      hideError(parent);
      return true;
    }
  }
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

function launchModal() {
  modalbg.style.display = "block";
}

function modalFormClose () {
  closeModal.onclick = function() {
  modalbg.style.display = "none";
  };
}

function modalFormLaunch () {
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
}

function showError(el) {
  el.setAttribute('data-error-visible', true);
}

function submitForm(e) {
  e.preventDefault();
  document.querySelector('.modal-body').innerHTML = " ";
  modalBody.style.height = "800px";
  modalBody.style.display = "flex";
  modalBody.style.flexDirection = "column";
  modalBody.style.justifyContent = "flex-end";
  thankyouMessage();
  closeBtn();
}

function thankyouMessage() {
  let para = document.createElement("P");
  para.innerText = 'Merci ! Votre réservation a été reçue.';              
  document.querySelector('.modal-body').appendChild(para);
  para.style.marginBottom = "270px";
}
















