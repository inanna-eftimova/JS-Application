import { html, render } from '../node_modules/lit-html/lit-html.js';

document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();

    const towns = document.getElementById('towns').value.split(', ').map(e => e.trim());
    const template = (towns) => html`
    <ul>
        ${towns.map((town) => html`
        <li>${town}</li>`)}
    </ul>`;
    render(template(towns), document.getElementById('root'));
    document.getElementById('towns').value = '';
});

  
