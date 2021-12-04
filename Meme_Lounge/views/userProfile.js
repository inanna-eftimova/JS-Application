import {html, render} from '../node_modules/lit-html/lit-html.js';

const userProfileTemplate = (res) => html`
 <section id="my-books-page" class="my-books">
            <h1>My Books</h1> -->
             <ul class="my-books-list">
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
const userProfileTemplate0 = () => html`
 <section id="my-books-page" class="my-books">
            <h1>My Books</h1> -->
<p class="no-books">No books in database!</p>
        </section>
`; 
export function renderUserProfile(){
   const url = `http://localhost:3030/data/books?where=_ownerId%3D%22${localStorage.getItem('userId')}%22&sortBy=_createdOn%20desc`;
   fetch(url).then(r=>r.json()).then(r=>{
      if(r.length == 0){
         render(userProfileTemplate0(), document.querySelector('#site-content'))
      }else{
        render(userProfileTemplate(r), document.querySelector('#site-content'))
      }
   });
}