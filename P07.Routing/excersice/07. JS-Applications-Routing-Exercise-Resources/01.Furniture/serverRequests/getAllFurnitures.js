import { homePgeTemplate } from "../templates/homePageTemplate.js";
import {html, render} from '../node_modules/lit-html/lit-html.js';
export function getAllFurnitures(){
    const url = 'http://localhost:3030/data/catalog';
    fetch(url)
    .then(r => r.json()
    .then( r => render(homePgeTemplate(r), document.querySelector('.root'))));
}


