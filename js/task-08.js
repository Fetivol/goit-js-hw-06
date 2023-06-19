const loginFormEl = document.querySelector('.login-form');

loginFormEl.addEventListener('submit', saubmitEvent);

function saubmitEvent(even) {
  even.preventDefault();
  const { email, password } = even.currentTarget.elements;

  const events = {
    email: email.value,
    password: password.value,
  };
  email.value === '' || password.value === ''
    ? alert('Pleasae, fill the form before submit')
    : console.log(events);
}
