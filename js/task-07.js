const fontControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

fontControlEl.addEventListener(
  'change',
  () => (textEl.style.fontSize = `${fontControlEl.value}px`)
);
textEl.addEventListener('');
