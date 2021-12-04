// import {html, render} from '../node_modules/lit-html/lit-html.js';

// import { nav } from './renderNav.js';

// const url = 'http://localhost:3030/data/games?sortBy=_createdOn%20desc';
// export function allTemplatesMoreThan0(){
//     fetch(url).then(r => r.json()).then(r => {
//         nav();
//     if(r.length == 0){
//         const allMemesTemplate = () => html`
//          <section id="catalog-page">
//             <h1>All Games</h1> -->
//              <h3 class="no-articles">No articles yet</h3>
//         </section> 
//         `
//         render(allMemesTemplate(r), document.querySelector('#main-content'))
//     }else{
//        const allMemesTemplate1 = (responce) => html`
//        <section id="catalog-page">
//             <h1>All Games</h1> -->
//             <!-- Display div: with information about every game (if any) -->
//             ${responce.map((r) => html`
//             <div id='${r._ownerId}' class="allGames">
//                 <div class="allGames-info">
//                     <img src="${r.imageUrl}">
//                     <h6>${r.category}</h6>
//                     <h2>${r.title}</h2>
//                     <a href="/details/${r._ownerId}/${r._id}" class="details-button">Details</a>
//                 </div>

//             `)} 
//         </section> 
// `; 
// render(allMemesTemplate1(r), document.querySelector('#main-content'));

// }
// });
// }




