const loginFormEl = document.querySelector('.login-form');

loginFormEl.addEventListener('submit', saubmitEvent);

function saubmitEvent(even) {
  even.preventDefault();
  const { email, password } = even.currentTarget.elements;

  if (email.value === '' || password.value === '') {
    alert('Pleasae, fill the form before submit');
  } else {
    console.log({ email: email.value, password: password.value });
    even.currentTarget.reset();
  }
}
