import {html, render} from '../node_modules/lit-html/lit-html.js';
import { nav } from './renderNav.js';
import page from '../node_modules/page/page.mjs'


const logInTemplate = () => html`
 <section id="login-page" class="login">
            <form id="login-form" action="" method="">
                <fieldset>
                    <legend>Login Form</legend>
                    <p class="field">
                        <label for="email">Email</label>
                        <span class="input">
                            <input type="text" name="email" id="email" placeholder="Email">
                        </span>
                    </p>
                    <p class="field">
                        <label for="password">Password</label>
                        <span class="input">
                            <input type="password" name="password" id="password" placeholder="Password">
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Login">
                </fieldset>
            </form>
        </section>
`; 

export function renderLoginTemp (){
    render(logInTemplate(), document.querySelector('#site-content'));

    document.querySelector('#login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const url ='http://localhost:3030/users/login';

        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');

        const data = {email,password};

        fetch(url, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(r => r.json())
        .then(r => {
            localStorage.setItem('token', r.accessToken);
            localStorage.setItem('userId', r._id);
            localStorage.setItem('email', r.email);
            nav();
            page.redirect('/');
            page.start();
            e.target.reset();
        }).catch(er => alert(er));
    });
  };