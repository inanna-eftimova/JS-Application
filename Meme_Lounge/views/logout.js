import page from '../node_modules/page/page.mjs'
import { nav } from './renderNav.js';

export function logOut(){
const url = 'http://localhost:3030/users/logout';

fetch(url, {
    method: 'get',
    headers: {'Content-Type': 'application/json',
    'X-Authorization': localStorage.getItem('token')}
});
  localStorage.clear();
   nav();
   page.redirect('/');
   page.start();
}