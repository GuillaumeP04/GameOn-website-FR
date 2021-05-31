// DOM Elements
let modalbg = document.querySelector(".bground");
let modalBtn = document.querySelectorAll(".modal-btn");
let closeModal = document.getElementsByClassName("close")[0];
let firstName = document.getElementById('first');
let lastName = document.getElementById('last');
let email = document.getElementById('email');
let birthdate = document.getElementById('birthdate');
let numPart = document.querySelector("input[type=number]");
let submitBtn = document.getElementById('btn-submit');
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



function isLocationValid () {
  let parent = locationCheckboxes.closest('div');
  showError(parent);
    if (!locationCheckboxes.checked) {
      console.log(123)
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