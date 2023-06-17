const buttonIncEl = document.querySelector('button[data-action="increment"]');
const buttonDecEl = document.querySelector('button[data-action="decrement"]');
const counterValue = document.querySelector('#value');

// console.log(buttonIncEl);
// console.log(buttonDecEl.dataset.action);
// console.log(Number(valueEl.textContent));

const handlerClick = event => {
  event.currentTarget === buttonIncEl
    ? (counterValue.textContent = Number(counterValue.textContent) + 1)
    : (counterValue.textContent -= 1);
};

buttonIncEl.addEventListener('click', handlerClick);
buttonDecEl.addEventListener('click', handlerClick);
