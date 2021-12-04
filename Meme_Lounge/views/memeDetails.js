 import {html, render} from '../node_modules/lit-html/lit-html.js';
 import { deleteFun } from './deleteMeme.js';

   export function detailsFun(ctx){
   const url = `http://localhost:3030/data/books/${ctx.params.id}`;

   fetch(url)
   .then(r => r.json())
   .then(r => {
       if(ctx.params.userId == localStorage.getItem('userId')){
    const memeDetailsTemplate = (r) => html`
   <section id="details-page" class="details">
            <div class="book-information">
                <h3>${r.title}</h3>
                <p class="type">Type: ${r.type}</p>
                <p class="img"><img src="${r.imageUrl}"></p>
                <div class="actions">
                    <!-- Edit/Delete buttons ( Only for creator of this book )  -->
                     <a class="button" href="/details/${r._ownerId}/${r._id}/edit">Edit</a>
                    <a id="${r._id}" class="button delete">Delete</a> 

                    <!-- ( for Guests and Users )  -->
                     <div class="likes">
                        <img class="hearts" src="/images/heart.png">
                        <span id="total-likes">Likes: 0</span>
                    </div> 
                    <!-- Bonus -->
                 </div>
            </div>
            <div class="book-description">
                <h3>Description:</h3>
                <p>${r.description}</p>
            </div>
        </section>
`; 
render(memeDetailsTemplate(r), document.querySelector('#site-content'))
}else{
    const memeDetailsTemplate1 = (r) => html`
    <section id="details-page" class="details">
            <div class="book-information">
                <h3>${r.title}</h3>
                <p class="type">Type: ${r.type}</p>
                <p class="img"><img src="${r.imageUrl}"></p>
                <div class="actions">

                    <!-- Bonus -->
                    <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
                    <!-- <a class="button" href="#">Like</a> -->

                    <!-- ( for Guests and Users )  -->
                     <div class="likes">
                        <img class="hearts" src="/images/heart.png">
                        <span id="total-likes">Likes: 0</span>
                    </div> 
                    <!-- Bonus -->
                 </div>
            </div>
            <div class="book-description">
                <h3>Description:</h3>
                <p>${r.description}</p>
            </div>
        </section>`;
render(memeDetailsTemplate1(r), document.querySelector('#site-content'))
}
 Array.from(document.querySelectorAll('.delete')).forEach(x => x.addEventListener('click', deleteFun));

})
}
