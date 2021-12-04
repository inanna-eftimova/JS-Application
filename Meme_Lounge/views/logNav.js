import {html, render} from '../node_modules/lit-html/lit-html.js';

export const logNavTemplate = () => html`

<nav class="navbar">
                <section class="navbar-dashboard">
                    <a href="/">Dashboard</a>
                    <div id="user">
                        <span>Welcome, ${localStorage.getItem('email')}</span>
                        <a class="button" href="/myBooks">My Books</a>
                        <a class="button" href="/create">Add Book</a>
                        <a class="button" href="logout">Logout</a>
                    </div>
                </section>
            </nav>
`; 
 