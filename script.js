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
    console.log('success');
    formInputs.forEach((input) => {
      input.value = '';
    });
  } else {
    console.log('NOPE');
    Array.from(formInputs);
    const failedInput = form.map((input) => input.checkValidity());
    console.log(failedInput[0]);
  }
});

cancel.addEventListener('click', (event) => {
  event.preventDefault();
  formInputs.forEach((input) => {
    input.value = '';
  });
  formInputs[0].focus();
});

// This next section could probably be a loop to set all the listeners and then..
// Set the custom validity messages to an interpolation depending on what element needs the message.

email.addEventListener('keyup', () => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity('I am expecting an e-mail address!');
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
