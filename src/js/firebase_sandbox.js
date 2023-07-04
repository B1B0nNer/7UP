// Imports
import {
    firebase_registration,
    firebase_autorization,
    firebase_logout,
} from './firebase'

// Variabels
const sign_up = document.getElementById('sign-up');
const sign_in = document.getElementById('sign-in');

// TRIGERS

// Registration
sign_up.addEventListener('submit', event => {

    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    const theme = localStorage.getItem('theme');

    firebase_registration(email, password, name, theme)
        .catch(err => console.log(err))

})

// Authorization
sign_in.addEventListener('submit', async (event) => {

    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    firebase_autorization(email, password)
        .catch(err => console.log(err))

})