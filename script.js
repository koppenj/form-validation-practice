/* eslint-disable no-console */
/* eslint-disable no-param-reassign */

const email = document.querySelector('#email');
const country = document.querySelector('#select-country');
const zipcode = document.querySelector('#zipcode');
const pwd = document.querySelector('#pwd');
const confirmPwd = document.querySelector('#confirmPwd');
const submit = document.querySelector('#submit-btn');
const cancel = document.querySelector('#cancel-btn');
const form = document.querySelector('#form');
const formInputs = document.querySelectorAll('input');

submit.addEventListener('click', (event) => {
  event.preventDefault();
  if (form.checkValidity()) {
    // eslint-disable-next-line no-alert
    alert('High Five! Success');
    form.reset();
  } else {
    const badApples = document.querySelectorAll(':invalid');
    badApples[1].focus();
  }
});

cancel.addEventListener('click', (event) => {
  event.preventDefault();
  form.reset();
  formInputs[0].focus();
});

email.addEventListener('input', () => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity('Enter A Valid Email Address');
    email.reportValidity();
  } else {
    email.setCustomValidity('');
  }
});

country.addEventListener('blur', () => {
  if (country.validity.typeMismatch) {
    country.setCustomValidity('Select One');
    country.reportValidity();
  } else {
    country.setCustomValidity('');
  }
});

zipcode.addEventListener('input', () => {
  if (zipcode.validity.patternMismatch) {
    zipcode.setCustomValidity('Incorrect Value. Requires 5 numbers.');
    zipcode.reportValidity();
  } else {
    zipcode.setCustomValidity('');
  }
});

pwd.addEventListener('blur', () => {
  if (pwd.validity.typeMismatch) {
    pwd.setCustomValidity('See Tip For Details On Setting Password');
    pwd.reportValidity();
  } else {
    pwd.setCustomValidity('');
  }
});

confirmPwd.addEventListener('input', () => {
  if (confirmPwd.value !== pwd.value) {
    confirmPwd.setCustomValidity('Must Match Password');
    confirmPwd.reportValidity();
  } else if (confirmPwd.value === pwd.value) {
    console.log('Matched');
    confirmPwd.setCustomValidity('');
  }
});
