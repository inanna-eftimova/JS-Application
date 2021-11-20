import { showHome } from './home.js';

async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    const response = await fetch('http://localhost:3030/users/login', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    if (response.ok == false) {
        const error = await response.json();
        alert(error.message);
        return;
    }
    event.target.reset();
    const data = await response.json();

    sessionStorage.setItem('authToken', data.accessToken);
    sessionStorage.setItem('userId', data._id);
    sessionStorage.setItem('email', data.email);

    [...document.querySelectorAll('nav .user')].forEach(element => {
        element.style.display = 'block';
    });
    [...document.querySelectorAll('nav .guest')].forEach(element => {
        element.style.display = 'none';
    });

    showHome();
}

let main;
let section;

export function setupLogin(mainSection, currentSection) {
    main = mainSection;
    section = currentSection;

    const form = section.querySelector('form');
    form.addEventListener('submit', onSubmit);
}

export async function showLogin() {
    main.innerHTML = '';
    main.appendChild(section);
}