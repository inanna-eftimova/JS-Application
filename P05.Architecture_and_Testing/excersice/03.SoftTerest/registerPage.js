import { registerFormFun } from "./registerFormFun.js";

export function registerPage(e){
    e.preventDefault();
    document.querySelectorAll('section').forEach(x => x.classList.add('hide'));
    document.getElementById('registration').classList.remove('hide');
    document.getElementById("registrationForm").addEventListener('submit', registerFormFun);
    
}

