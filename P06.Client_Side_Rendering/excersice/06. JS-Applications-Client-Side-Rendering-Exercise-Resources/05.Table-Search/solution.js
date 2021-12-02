import { html, render } from '../node_modules/lit-html/lit-html.js';

const template = (persons) => html`${persons.map((person) => html`
<tr>
                <td>${person.firtName} ${person.lastName}</td>
                <td>${person.email}</td>
                <td>${person.course}</td>
            </tr>` )}`;


const url = 'http://localhost:3030/jsonstore/advanced/table';
fetch(url)
.then(r => r.json())
.then(r => {
   const array = Object.values(r);
   render(template(array), document.getElementById('tBody'));
});




function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
     const input = document.getElementById('searchField').value;
     Array.from(document.querySelectorAll('tbody tr')).forEach(tr => {
        const text = tr.textContent;
        if(text.toLowerCase().includes(input)){
           tr.classList.add('select');
        }else{
           tr.classList.remove('select');
        }
        document.getElementById('searchField').value = '';
     })
   }
}

solve();