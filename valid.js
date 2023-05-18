// 
const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const passwordInput = document.getElementById('password');
const cpasswordInput = document.getElementById('confpassword');
const ageInput = document.getElementById('age');
const cityInput = document.getElementById('city');
const emailInput = document.getElementById('email');
const mobileInput = document.getElementById('mobile');

const nameCheck = /^[A-Z]{1}[a-z]{3,}$/;
const cityCheck = /^[A-Z]{1}[a-z]{3,}$/;
const mobileCheck = /^[987]{1}[0-9]{9}$/;
const emailCheck = /\S+@\S+\.\S+/;
const ageCheck = /^[0-9]{1,2}$/;

nameInput.addEventListener('input', validateName);
cityInput.addEventListener('input', validateCity);
mobileInput.addEventListener('input', validateMobile);
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);
cpasswordInput.addEventListener('input', validateConfirmPassword);
ageInput.addEventListener('input', validateAge);

function validateName() {
  const name = nameInput.value.trim();
  if (nameCheck.test(name)) {
    document.getElementById('nameerror').innerHTML = "";
  } else {
    document.getElementById('nameerror').innerHTML = " ** Name is invalid";
  }
}

function validateCity() {
  const city = cityInput.value.trim();
  if (cityCheck.test(city)) {
    document.getElementById('cityerror').innerHTML = "";
  } else {
    document.getElementById('cityerror').innerHTML = " ** City is invalid";
  }
}

function validateMobile() {
  const mobile = mobileInput.value.trim();
  if (mobileCheck.test(mobile)) {
    document.getElementById('numbererror').innerHTML = "";
  } else {
    document.getElementById('numbererror').innerHTML = " ** Mobile number is invalid";
  }
}

function validateEmail() {
  const email = emailInput.value.trim();
  if (emailCheck.test(email)) {
    document.getElementById('emailerror').innerHTML = "";
  } else {
    document.getElementById('emailerror').innerHTML = " ** Email is invalid";
  }
}

function validatePassword() {
  const password = passwordInput.value;
  const cpassword = cpasswordInput.value;
  if (password === cpassword) {
    document.getElementById('cpassworderror').innerHTML = "";
  } else {
    document.getElementById('cpassworderror').innerHTML = " ** Passwords don't match";
  }
}

function validateConfirmPassword() {
  validatePassword();
}

function validateAge() {
  const age = ageInput.value.trim();
  if (ageCheck.test(age)) {
    document.getElementById('ageerror').innerHTML = "";
  } else {
    document.getElementById('ageerror').innerHTML = " ** Age is invalid";
  }
}
