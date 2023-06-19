function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createArray(a) {
  const array = [];
  for (let i = 1; i <= a; i += 1) {
    array.push(i);
  }
  return array;
}
const selectors = {
  divEl: document.querySelector('#controls'),
  inputEl: document.querySelector('#controls').children[0],
  createbuttonEl: document.querySelector('#controls').children[1],
  destroyButtonEl: document.querySelector('#controls').children[2],
  boxesEl: document.querySelector('#boxes'),
  width: 30,
  height: 30,
};

selectors.createbuttonEl.addEventListener('click', creatingOfBoxes);
selectors.destroyButtonEl.addEventListener('click', destroingOfBoxes);

selectors.inputEl.addEventListener('change', () => {
  if (
    Number(selectors.inputEl.value) >= selectors.inputEl.getAttribute('min') &&
    Number(selectors.inputEl.value) <= selectors.inputEl.getAttribute('max')
  ) {
    console.log(selectors.inputEl.value);
    return selectors.inputEl.value;
  } else {
    alert('Enter number in range: 1 - 100');
  }
});

function creatingOfBoxes() {
  const newBoxesArray = createArray(selectors.inputEl.value);
  console.log(newBoxesArray);
  const newBoxes = newBoxesArray.map(elem => {
    const box = document.createElement('div');
    box.style.width = `${selectors.width + elem * 10}px`;
    box.style.height = `${selectors.height + elem * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    return box;
  });
  console.log(typeof newBoxes);
  selectors.boxesEl.append(...newBoxes);
}

function destroingOfBoxes() {
  const elementsForDelete = [...selectors.boxesEl.childNodes].map(element =>
    element.remove()
  );
  console.log(elementsForDelete);
}
