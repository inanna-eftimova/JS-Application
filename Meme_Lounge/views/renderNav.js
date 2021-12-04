import {html, render} from '../node_modules/lit-html/lit-html.js';
import { guestNavTemplate } from './guestNav.js';
import { logNavTemplate } from './logNav.js';

export function nav(){
    if(localStorage.getItem('token') == null){
   render(guestNavTemplate(), document.querySelector('#main')); 
}else{
   render(logNavTemplate(), document.querySelector('#main'))
}
};