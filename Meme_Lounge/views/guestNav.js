import {html, render} from '../node_modules/lit-html/lit-html.js';

export const guestNavTemplate = () => html`

<nav class="navbar">
                <section class="navbar-dashboard">
                    <a href="/">Dashboard</a>
                    <div id="guest">
                        <a class="button" href="/login">Login</a>
                        <a class="button" href="/register">Register</a>
                    </div>
                </section>
            </nav>
        
`; 

