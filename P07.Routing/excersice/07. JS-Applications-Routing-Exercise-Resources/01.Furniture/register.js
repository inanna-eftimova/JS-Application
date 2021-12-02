import page from './node_modules/page/page.mjs';
import { getAllFurnitures } from './serverRequests/getAllFurnitures.js';

document.getElementById('registerForm').addEventListener('submit', registerFun);

function registerFun(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const rePass = formData.get('rePass');
    const url  = 'http://localhost:3030/users/register';
    if(email!='' && password!='' && rePass!='' && password==rePass){
        fetch(url, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email,password})
        }).then(r => r.json())
        .then(r => {
            localStorage.setItem('token', r.accessToken);
            e.target.reset();
            page.redirect('/index');
        }).catch(e => alert(e));
    }else{
        alert('Incorent input!');
    }
}