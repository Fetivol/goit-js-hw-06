const validationEl = document.querySelector('#validation-input[data-length]');

validationEl.addEventListener('blur', validateInput);
validationEl.setAttribute(
  'placeholder',
  `Please enter ${validationEl.dataset.length} symbols`
);

function validateInput() {
  if (validationEl.value.length === Number(validationEl.dataset.length)) {
    validationEl.classList.add('valid');
    validationEl.classList.remove('invalid');
  } else if (validationEl.value.length === 0) {
    validationEl.classList.remove('valid');
    validationEl.classList.remove('invalid');
  } else {
    validationEl.classList.remove('valid');
    validationEl.classList.add('invalid');
  }
}
