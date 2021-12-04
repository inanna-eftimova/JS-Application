import {html, render} from '../node_modules/lit-html/lit-html.js';
import page from './node_modules/page/page.mjs';
// import { allTemplatesMoreThan0 } from './views/allMemes.js';
import { renderMeme } from './views/createMeme.js';
 import { editFunction } from './views/editMeme.js';
import { renderHomeTemp } from './views/home.js';
import { renderLoginTemp } from './views/logIn.js';
import { logOut } from './views/logout.js';
import { detailsFun } from './views/memeDetails.js';
import { renderRegisterTemp } from './views/registration.js';
import { nav } from './views/renderNav.js';
import { renderUserProfile } from './views/userProfile.js';

nav();
renderHomeTemp();

 page('/' ,renderHomeTemp);
 page('/register', renderRegisterTemp);
 page('/login', renderLoginTemp);
 page('/logout', logOut)
//  page('/allgames', allTemplatesMoreThan0);
 page('/details/:userId/:id', detailsFun);
 page('/create', renderMeme);
 page('/details/:userId/:id/edit', editFunction);
 page('/myBooks', renderUserProfile);

 page.start();