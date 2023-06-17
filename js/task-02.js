const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingridientsList = document.querySelector('#ingredients');

// ingredients.forEach(element => {
//   let lElement = document.createElement('li');
//   lElement.classList.add('item');
//   lElement.textContent = element;
//   ingridientsList.append(lElement);
// });

const elements = ingredients.map(element => {
  const lElement = document.createElement('li');
  lElement.classList.add('item');
  lElement.textContent = element;
  console.log(lElement);
  return lElement;
});
ingridientsList.append(...elements);
