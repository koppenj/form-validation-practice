/* eslint-disable no-param-reassign */
// Use API to check inputs on form beyond what html can do

const submit = document.querySelector('#submit-btn');
const cancel = document.querySelector('#cancel-btn');

submit.addEventListener('click', (event) => {
  event.preventDefault();
  // check if valid. if so:
  const formData = document.querySelectorAll('input');
  const retrievedData = [];
  formData.forEach((data) => {
    retrievedData.push(data.value);
    // eslint-disable-next-line no-console
    console.table(retrievedData);
  });
  // if not:
  // Highlight that tooltips and the first input that needs addressing
});

// I need to do some regex for the passwords and to compare the first and second inputs

// Hey this works first shot!
cancel.addEventListener('click', (event) => {
  event.preventDefault();
  const theFormInputs = document.querySelectorAll('input');
  theFormInputs.forEach((input) => {
    input.value = '';
  });
  theFormInputs[0].focus();
});
