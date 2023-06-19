const inputEl = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output');

inputEl.addEventListener('input', evt => {
  const inputText = evt.currentTarget.value.trim();
  // console.log(inputText, '|');
  inputText === ' ' || inputText.length < 1
    ? (nameEl.textContent = 'Anonymous')
    : (nameEl.textContent = inputText);
});
const a = '   bbbbb   ';
console.log(a.trim());
