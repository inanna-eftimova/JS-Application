import { html, render } from "../node_modules/lit-html/lit-html.js";
import { towns} from "./towns.js";
const town = towns;
document.getElementById('button').addEventListener('click', search);
let townsRendering = (town) => html`<ul>
      ${town.map((t) => html`<li>${t}</li>`)}
   </ul>`;

   render(townsRendering(town), document.getElementById('towns'));


function search() {
   let counter = 0;
   document.querySelectorAll('li').forEach(li => {
      const text = li.textContent.toLowerCase();
      if(text.includes(document.getElementById('searchText').value)){
         counter++;
         li.classList.add('active');
      }else{
         li.classList.remove('active');
      }
   })
   document.getElementById('result').textContent = `${counter} matches found`;
   document.getElementById('searchText').value = '';
}

