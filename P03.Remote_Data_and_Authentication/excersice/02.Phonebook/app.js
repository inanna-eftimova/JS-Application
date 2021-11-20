function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', loadFun);
    document.getElementById('btnCreate').addEventListener('click', createFun);
}

function loadFun(){
    const url = 'http://localhost:3030/jsonstore/phonebook';
    const phonebook = document.getElementById('phonebook');
    phonebook.replaceChildren();
    fetch(url)
    .then(el => el.json())
    .then(r => {
        Object.values(r).forEach(el => {
            const li = document.createElement('li');
            li.textContent = `${el.person}: ${el.phone}`;    
            const button = document.createElement('button');
            button.textContent = 'Delete';
            button.id = el._id;
            li.appendChild(button);
            phonebook.appendChild(li);
            document.querySelectorAll('ul li button').forEach(button => {
            button.addEventListener('click', deleteFun);
            });
        });
    });
}
function deleteFun(e){
    const url = 'http://localhost:3030/jsonstore/phonebook/';
    const phonebook = document.getElementById('phonebook');
    const id = e.target.id;
    fetch(url + id,{
        method: 'delete'
    }).then(el => el.json())
    .then(r => {
        loadFun();
    });
    const element = e.target.parentElement.parentElement;
    element.replaceChildren();
    phonebook.replaceChildren();
    
}
function createFun(){
    const url = 'http://localhost:3030/jsonstore/phonebook';
    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');
    const phonebook = document.getElementById('phonebook');
    const input = {person: personInput.value, phone: phoneInput.value};
    fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(input)
    })
    .then(r => r.json())
    .then(el => {
            const li = document.createElement('li');
            li.textContent = `${el.person}: ${el.phone}`;    
            const button = document.createElement('button');
            button.textContent = 'Delete';
            button.id = el._id;
            button.addEventListener('click', deleteFun);
            li.appendChild(button);
            phonebook.appendChild(li);
            personInput.value ='';
            phoneInput.value ='';
    })
}
attachEvents();