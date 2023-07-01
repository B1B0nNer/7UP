
const btnSingUp = document.querySelector('[data-action="sign-up"]');
const btnSingIn = document.querySelector('[data-action="sign-in"]');

btnSingUp.disabled = true;
const autorizationBtnEl = document.querySelector('.authorization__btn__submit');
const signInForm = document.querySelector('#sign-in');
const signUpForm = document.querySelector('#sign-up');

btnSingIn.addEventListener('click', e => {
  e.preventDefault();
  btnSingUp.classList.remove('active-link');
  btnSingUp.classList.add('desactive-link');
  btnSingIn.classList.remove('desactive-link');
  btnSingIn.classList.add('active-link');
  autorizationBtnEl.textContent = 'Sign in';

  signInForm.classList.remove('display-form');
  signUpForm.classList.add('display-form');

  btnSingUp.disabled = false;
  btnSingIn.disabled = true;
});

btnSingUp.addEventListener('click', e => {
  e.preventDefault();
  btnSingUp.classList.add('active-link');
  btnSingUp.classList.remove('desactive-link');
  btnSingIn.classList.add('desactive-link');
  btnSingIn.classList.remove('active-link');
  autorizationBtnEl.textContent = 'Sign up';

  signInForm.classList.add('display-form');
  signUpForm.classList.remove('display-form');

  btnSingUp.disabled = true;
  btnSingIn.disabled = false;
});

