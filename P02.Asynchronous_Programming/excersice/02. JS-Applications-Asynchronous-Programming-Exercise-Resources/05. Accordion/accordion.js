function solution() {
    const url = 'http://localhost:3030/jsonstore/advanced/articles/list';
    const main = document.getElementById('main');
    fetch(url)
    .then(e => e.json())
    .then(el =>{
        for (const elements of el) {   
            let id = elements['_id'];   
            const secondUrl = 'http://localhost:3030/jsonstore/advanced/articles/details/' + id ;
            fetch(secondUrl)
            .then(e => e.json())
            .then(el1 => {
            const div = document.createElement('div');
            div.classList.add("accordion");
            const div1 = document.createElement('div');
            div1.classList.add("head");
            const span = document.createElement('span');
            span.textContent = elements.title;
            const buttonMore = document.createElement('button');
            buttonMore.classList.add("button");
            buttonMore.textContent = 'More';
            buttonMore.id = id;
            buttonMore.addEventListener('click', more)
            div1.appendChild(span);
            div1.appendChild(buttonMore);
            div.appendChild(div1);
            const div2 = document.createElement('div');
            div2.classList.add("extra");
            const p = document.createElement('p');
            p.textContent = el1.content;
            div2.appendChild(p);
            div.appendChild(div2);
            main.appendChild(div);
            });      
        }
    })
}
function more(e){
    let divElement = e.target.parentElement.parentElement;
    let button = divElement.querySelector('button');
    if(button.textContent == 'More'){
       e.target.parentElement.nextSibling.classList.remove("extra");
       e.target.parentElement.nextSibling.classList.add("extra2");
       button.textContent = 'Less';
    }else{
        e.target.parentElement.nextSibling.classList.remove("extra2");
        e.target.parentElement.nextSibling.classList.add("extra");
        button.textContent = 'More';
    } 
}
solution()