function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const selectors = {
  buttonEl: document.querySelector('.widget'),
  bodyEl: document.body,
  textEl: document.querySelector('.color'),
};

console.log(selectors.bodyEl, selectors.buttonEl, selectors.textEl);
selectors.buttonEl.addEventListener('click', () => {
  let color = getRandomHexColor();
  selectors.bodyEl.style.backgroundColor = color;
  selectors.textEl.textContent = color;
});
