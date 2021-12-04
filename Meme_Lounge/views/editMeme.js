import {html, render} from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';


const editMemeTemplate = (r) => html`
<section id="edit-page" class="edit">
            <form id="edit-form" action="#" method="">
                <fieldset>
                    <legend>Edit my Book</legend>
                    <p class="field">
                        <label for="title">Title</label>
                        <span class="input">
                            <input type="text" name="title" id="title" value="${r.title}">
                        </span>
                    </p>
                    <p class="field">
                        <label for="description">Description</label>
                        <span class="input">
                            <textarea name="description"
                                id="description">${r.description}</textarea>
                        </span>
                    </p>
                    <p class="field">
                        <label for="image">Image</label>
                        <span class="input">
                            <input type="text" name="imageUrl" id="image" value="${r.imageUrl}">
                        </span>
                    </p>
                    <p class="field">
                        <label for="type">Type</label>
                        <span class="input">
                            <select id="type" name="type" value="${r.type}">
                                <option value="Fiction" selected>Fiction</option>
                                <option value="Romance">Romance</option>
                                <option value="Mistery">Mistery</option>
                                <option value="Classic">Clasic</option>
                                <option value="Other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Save">
                </fieldset>
            </form>
        </section>
`; 

export function editFunction(ctx){
    const url = `http://localhost:3030/data/books/${ctx.params.id}`;
    fetch(url).then(r=>r.json()).then(r => {
        render(editMemeTemplate(r), document.querySelector('#site-content'));

        document.getElementById('edit-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const title = formData.get('title');
            const description = formData.get('description');           
            const imageUrl = formData.get('imageUrl');
            const type = formData.get('type');
            if(title=='' || description==''|| imageUrl==''|| type ==''){
                alert(`All inputs must be field!`);
            }else{
            const data = {title,description,imageUrl, type};
            fetch(url, {
                method: 'put',
                headers: {'Content-Type': 'application/json',
                'X-Authorization': localStorage.getItem('token')},
                body: JSON.stringify(data)
            }).then(r => r.json()).then(r => {
               page.redirect(`/details/${r._ownerId}/${r._id}`);
               page.start();
               
            })
        }
    })
   })
};