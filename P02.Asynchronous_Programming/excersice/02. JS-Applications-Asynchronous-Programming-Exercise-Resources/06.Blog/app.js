function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', load);
    document.getElementById('btnViewPost').addEventListener('click', add);
   

}
function load(e) {
    const url = 'http://localhost:3030/jsonstore/blog/posts';
    fetch(url)
        .then(r => r.json())
        .then(el => {
            const posts = document.getElementById('posts');
            posts.replaceChildren();
            Object.values(el).forEach(e => {
                const option = document.createElement('option');
                option.value = `${e['id']}`;
                option.textContent = `${e['title']}`;
                posts.appendChild(option);
                objInfo[e['id']] = `${e.body}`;
            })

        });
}
const objInfo = {};
function add(e) {
    const x = document.getElementById("posts").selectedIndex;
    const id = document.getElementsByTagName("option")[x].value;
    const text = document.getElementsByTagName("option")[x].textContent;
    const postBody = document.getElementById("post-body");
    const urlTek = 'http://localhost:3030/jsonstore/blog/comments/';
    document.getElementById('post-title').textContent = text.toUpperCase();
    fetch(urlTek)
        .then(el => el.json())
        .then(e => {
            const postComments = document.getElementById('post-comments');
            postComments.replaceChildren();
            postBody.replaceChildren();
            const p = document.createElement('p');
            p.textContent = objInfo[id];
            postBody.appendChild(p);
            Object.values(e).forEach(el => {
                if (el.postId == id) {
                    const li = document.createElement('li');
                    li.id = `${el.id}`;
                    li.textContent = `${el.text}`;
                    postComments.appendChild(li);

                }
            })
        })
}
attachEvents();