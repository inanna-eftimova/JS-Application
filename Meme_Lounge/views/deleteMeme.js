
import page from '../node_modules/page/page.mjs';

export function deleteFun(e){
    const url = `http://localhost:3030/data/books/${e.target.id}`;
    fetch(url, {
        method: 'delete',
        headers: {
        'X-Authorization': localStorage.getItem('token')}, 
    }).then(r =>r.json()).then(r => {
        page.redirect('/');
        page.start();
     
})
}