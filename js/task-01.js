const liElements = document.querySelectorAll('.item');
console.log(`Number of categories: ${liElements.length}`);

liElements.forEach(elem => {
  console.log(
    `Category: ${elem.firstElementChild.textContent}
Elements: ${elem.lastElementChild.children.length}`
  );
});
