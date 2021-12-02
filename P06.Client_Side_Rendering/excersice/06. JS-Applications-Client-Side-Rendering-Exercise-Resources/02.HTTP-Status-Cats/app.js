import { html, render } from '../node_modules/lit-html/lit-html.js';
import { cats } from './catSeeder.js';

const allCats = document.getElementById('allCats');
const cat = cats;
const rendering = (cat) => html`
<ul>
    ${cat.map((c) => html`
    <li>
        <img src="./images/${c.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
                <div class="info">
                    <button class="showBtn">Show status code</button>
                    <div class="status" style="display: none" id="${c.id}">
                        <h4>Status Code: ${c.statusCode}</h4>
                        <p>${c.statusMessage}</p>
                    </div>
                </div>
            </li>`)}
</ul>`;

render(rendering(cat), allCats);

Array.from(document.querySelectorAll('.showBtn')).forEach(e => e.addEventListener('click', hideShowFun));

function hideShowFun(e){
    if(e.target.textContent == 'Show status code'){
        e.target.textContent = 'Hide status code';
        e.target.parentElement.querySelector('.status').style.display = 'block';
    }else{
        e.target.textContent = 'Show status code';
        e.target.parentElement.querySelector('.status').style.display = 'none';

    }
}