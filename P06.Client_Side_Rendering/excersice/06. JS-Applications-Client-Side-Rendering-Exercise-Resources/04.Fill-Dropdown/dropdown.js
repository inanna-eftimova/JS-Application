import { html, render } from "../node_modules/lit-html/lit-html.js";
document.getElementById('send').addEventListener('submit', addItem);

let template = (elements) => html`${elements.map((el) => html`<option value="${el._id}">${el.text}</option>`)}`;
const url = 'http://localhost:3030/jsonstore/advanced/dropdown';
fetch(url)
.then(r => r.json())
.then(r => {
    console.log(r);
   const array = Object.values(r);
   render(template(array), document.getElementById('menu'));
});

function addItem(e) {
    e.preventDefault();
    const url = 'http://localhost:3030/jsonstore/advanced/dropdown';
    const input = document.getElementById('itemText').value;
    fetch(url, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({"text": input})
    });


fetch(url)
.then(r => r.json())
.then(r => {
   const array = Object.values(r);
   render(template(array), document.getElementById('menu'));
   document.getElementById('itemText').value = '';

});
}