import {html, render} from '../node_modules/lit-html/lit-html.js';
import { nav } from './renderNav.js';
import page from '../node_modules/page/page.mjs'


const createMemeTemplate = () => html`
<section id="create-page" class="create">
            <form id="create-form" action="" method="">
                <fieldset>
                    <legend>Add new Book</legend>
                    <p class="field">
                        <label for="title">Title</label>
                        <span class="input">
                            <input type="text" name="title" id="title" placeholder="Title">
                        </span>
                    </p>
                    <p class="field">
                        <label for="description">Description</label>
                        <span class="input">
                            <textarea name="description" id="description" placeholder="Description"></textarea>
                        </span>
                    </p>
                    <p class="field">
                        <label for="image">Image</label>
                        <span class="input">
                            <input type="text" name="imageUrl" id="image" placeholder="Image">
                        </span>
                    </p>
                    <p class="field">
                        <label for="type">Type</label>
                        <span class="input">
                            <select id="type" name="type">
                                <option value="Fiction">Fiction</option>
                                <option value="Romance">Romance</option>
                                <option value="Mistery">Mistery</option>
                                <option value="Classic">Clasic</option>
                                <option value="Other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Add Book">
                </fieldset>
            </form>
        </section>
`; 

export function renderMeme(){
    nav();
    render(createMemeTemplate(), document.getElementById('site-content'));
    document.getElementById('create-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get('title');
    const description = formData.get('description');
    const imageUrl = formData.get('imageUrl');
    const type = formData.get('type');
    if(title=='' || description==''|| imageUrl==''|| type==''){
        alert('All inputs must be field!');
          e.target.reset();
    }else{
         const data = {title,description,imageUrl, type};
         const url = 'http://localhost:3030/data/books';
         fetch(url,{
             method: 'post',
             headers: {'Content-Type': 'application/json',
             'X-Authorization': localStorage.getItem('token')},
             body: JSON.stringify(data)
         }).then(r => r.json())
         .then(r => {
            page.redirect('/');
            page.start();
         })
    }
   

});
}

