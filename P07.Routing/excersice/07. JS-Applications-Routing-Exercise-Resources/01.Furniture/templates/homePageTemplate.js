import {html, render} from '../node_modules/lit-html/lit-html.js';

export let homePgeTemplate = (elements) => html`
   ${elements.map((element) => html`
    <div class="col-md-4" id="${element._id}">
                <div class="card text-white bg-primary">
                    <div class="card-body" id="${element._ownerId}">
                            <img src="${element.img}" />
                            <p>${element.description}</p>
                            <footer>
                                <p>Price: <span>${element.price} $</span></p>
                            </footer>
                            <div>
                                <a href=”#” class="btn btn-info">Details</a>
                            </div>
                    </div>
                </div>
            </div>`)}`;
   