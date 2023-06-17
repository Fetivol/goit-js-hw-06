const inputEl = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output');

// inputEl.addEventListener('input', setText);

// function setText() {
//   inputEl.value.length < 1
//     ? (nameEl.textContent = 'Anonymous')
//     : (nameEl.textContent = inputEl.value);
// }

inputEl.addEventListener('input', () => {
  inputEl.value.length < 1
    ? (nameEl.textContent = 'Anonymous')
    : (nameEl.textContent = inputEl.value);
});
