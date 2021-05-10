// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModal = document.getElementsByClassName("close")[0];


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
closeModal.onclick = function() {
  modalbg.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalbg) {
    modalbg.style.display = "none";
  }
} 

// validation modal form
let firstName = document.getElementById('first');
let lastName = document.getElementById('last');
let email = document.getElementById('email');
let birthdate = document.getElementById('birthdate');
let numPart = document.getElementById('quantity');

firstName.addEventListener('input', function(){
  console.log(firstName.value)
})

lastName.addEventListener('input', function(){
  console.log(lastName.value)
})

email.addEventListener('input', function(){
  console.log(email.value)
})

birthdate.addEventListener('input', function(){
  console.log(birthdate.value)
})

numPart.addEventListener('input', function(){
  console.log(numPart.value)
})


// functions
function validate() {
      
  if( document.reserve.firstName.value == "" || document.reserve.firstName.length < 3) {
     alert( "Please provide your first name!" );
     document.reserve.firstName.focus() ;
     return false;
  }
  if( document.reserve.lastName.value == "" ) {
     alert( "Please provide your last name!" );
     document.reserve.lastName.focus() ;
     return false;
  }
  if( document.reserve.email.value == "" ) {
     alert( "Please provide your Email!" );
     document.reserve.email.focus() ;
     return false;
  }
  if( document.reserve.birthdate.value == "" ) {
     alert( "Please provide your birthdate!" );
     return false;
  }
  if( document.reserve.numPart.value == "" ) {
     alert( "Please provide a number" );
     return false;
  }
  return( true );
}

function validateEmail() {
  var emailID = document.myForm.EMail.value;
  atpos = emailID.indexOf("@");
  dotpos = emailID.lastIndexOf(".");
  
  if (atpos < 1 || ( dotpos - atpos < 2 )) {
     alert("Please enter correct email ID")
     document.myForm.EMail.focus() ;
     return false;
  }
  return( true );
}

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}