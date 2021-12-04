import {html, render} from '../node_modules/lit-html/lit-html.js';

 const homeTemplateWithElements = (res) => html`
<section id="dashboard-page" class="dashboard">
            <h1>Dashboard</h1>
            <!-- Display ul: with list-items for All books (If any) -->
           <ul class="other-books-list">
               ${res.map(r => html`
               <li class="otherBooks">
                    <h3>${r.title}</h3>
                    <p>Type: ${r.type}</p>
                    <p class="img"><img src="${r.imageUrl}"></p>
                    <a class="button" href="/details/${r._ownerId}/${r._id}">Details</a>
                </li>
               `)}
            </ul> 
        </section>
`; 

const homeTemplateWith0 = () => html`
<section id="dashboard-page" class="dashboard">
            <h1>Dashboard</h1> 
            <!-- Display paragraph: If there are no books in the database -->
             <p class="no-books">No books in database!</p>
        </section>
`; 



export function renderHomeTemp (){
    const url = 'http://localhost:3030/data/books?sortBy=_createdOn%20desc';

    fetch(url).then(r => r.json()).then(r => {
        if(r.length == 0){
            render(homeTemplateWith0(), document.querySelector('#site-content'));
        }else{
            render(homeTemplateWithElements(r), document.querySelector('#site-content'));
        }
    })
  };