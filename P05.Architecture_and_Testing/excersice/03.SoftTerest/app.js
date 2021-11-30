import { logIn } from "./logInPage.js";
import { registerPage } from "./registerPage.js";

document.getElementById("getStarted").addEventListener('click', registerPage);
document.getElementById('registrationSingIn').addEventListener('click', logIn);
document.getElementById('loginSingUp').addEventListener('click', registerPage);