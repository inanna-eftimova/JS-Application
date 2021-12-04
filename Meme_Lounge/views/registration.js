import {html, render} from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs'
import { nav } from './renderNav.js';


 const registerTemplate = () => html`
<section id="register-page" class="register">
            <form id="register-form" action="" method="">
                <fieldset>
                    <legend>Register Form</legend>
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
                    <p class="field">
                        <label for="repeat-pass">Repeat Password</label>
                        <span class="input">
                            <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Register">
                </fieldset>
            </form>
        </section>
`; 


export function renderRegisterTemp (){
  render(registerTemplate(), document.querySelector('#site-content'));

  document.getElementById('register-form').addEventListener('submit', (e) => {
      e.preventDefault();

      const url = 'http://localhost:3030/users/register';

      const formData = new FormData(e.target);
      const email = formData.get('email');
      const password = formData.get('password');
      const confirmPass = formData.get('confirm-pass');
      
      if(email=='' || password=='' || confirmPass=='' ){
          alert('All inputs must be field!');
          e.target.reset(); 
      }else if(password!=confirmPass){
          alert('Passwords must be match!');
      }else{
          
      const data = {  
          email,
          password,
        confirmPass
      };

      fetch(url, {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data)
      }).then(r => r.json())
      .then(r => {
          console.log(r);
        localStorage.setItem('token', r.accessToken);
        localStorage.setItem('userId', r._id);
        localStorage.setItem('email', r.email);
        nav();
        page.redirect('/');
        page.start();
        e.target.reset();
      }).catch(er => alert(er));
 } });
};