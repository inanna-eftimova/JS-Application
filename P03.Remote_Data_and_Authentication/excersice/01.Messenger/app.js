function attachEvents() {
   document.getElementById('refresh').addEventListener('click', getData);
   document.getElementById('submit').addEventListener('click', submitData);
}

function getData(){
    const url = 'http://localhost:3030/jsonstore/messenger';
    const messages = document.getElementById('messages'); 
    messages.value = "";
    fetch(url)
    .then(r => r.json())
    .then(e => {
        Object.values(e).forEach(el => {
            messages.value = messages.value + `${el.author}: ${el.content}\n`;
        }); 
    });  
}

function submitData(){
    const url = 'http://localhost:3030/jsonstore/messenger';
    const authorInput = document.getElementById('author');
    const contentInput = document.getElementById('content');
    const messages = document.getElementById('messages'); 
    const result = {author: authorInput.value, content: contentInput.value};
    fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(result)
    });
    messages.value = messages.value + `${authorInput.value}: ${contentInput.value}\n`;
    authorInput.value ='';
    contentInput.value ='';
    
}

attachEvents();