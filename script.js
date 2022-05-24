/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
// Use API to check inputs on form beyond what html can do
/* const form = document.querySelector('form'); */
/* const email = document.querySelector('#email');
const zipcode = document.querySelector('#zipcode'); */
const pwd = document.querySelector('#pwd');
const confirmPwd = document.querySelector('#confirmPwd');
const submit = document.querySelector('#submit-btn');
const cancel = document.querySelector('#cancel-btn');
const form = document.getElementById('#form');

confirmPwd.addEventListener('input', () => {
  if (confirmPwd.value !== pwd.value) {
    confirmPwd.setCustomValidity('Must Match Password');
    confirmPwd.reportValidity();
  } else if (confirmPwd.value === pwd.value) {
    console.log('Matched');
    confirmPwd.setCustomValidity('');
  }
});

submit.addEventListener('click', (event) => {
  event.preventDefault();

  // how to confirm ALL the form is filled?

  // I dont need this. Constraint Validation API should already prevent the form from submitting
/*   if (form.validity) {
    const formData = document.querySelectorAll('input');
    const retrievedData = [];
    formData.forEach((data) => {
      retrievedData.push(data.value);
      // eslint-disable-next-line no-console
      console.table(retrievedData);
    });
  } else {
    console.log('check your shit');
  } */
});

// Hey this works first shot!
cancel.addEventListener('click', (event) => {
  event.preventDefault();
  /* const theFormInputs = document.querySelectorAll('input');
  theFormInputs.forEach((input) => {
    input.value = '';
  });
  theFormInputs[0].focus(); */

  // My form isnt recognized as such because of the divs inside the form tag
  form.reset();
  console.log(form);
});
