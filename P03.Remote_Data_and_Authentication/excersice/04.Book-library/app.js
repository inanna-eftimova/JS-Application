 document.getElementById('loadBooks').addEventListener('click', solution);
 document.getElementById('form').addEventListener('submit', formFun);
 document.getElementById('form-save').addEventListener('submit', editFun);

function solution(){
const url = 'http://localhost:3030/jsonstore/collections/books';
const results = document.getElementById('results');
results.replaceChildren();
fetch(url)
.then(r => r.json())
.then(element => {
     for (const id in element) {
         const tr = document.createElement('tr');
         const tdOne = document.createElement('td');
         tdOne.textContent = element[id]['title'];
         const tdTwo = document.createElement('td');
         tdTwo.textContent = element[id]['author'];
         const tdThree = document.createElement('td');
         const editBtn = document.createElement('button');
         editBtn.id = id;
         editBtn.textContent ='Edit';
         editBtn.addEventListener('click', editFun);
         const deleteBtn = document.createElement('button');
         deleteBtn.id = id;
         deleteBtn.textContent = 'Delete';
         deleteBtn.addEventListener('click', deleteFun);
         tdThree.appendChild(editBtn);
         tdThree.appendChild(deleteBtn);
         tr.appendChild(tdOne);
         tr.appendChild(tdTwo);
         tr.appendChild(tdThree);
         results.appendChild(tr);

     }
});  
 }

function formFun(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    const url = 'http://localhost:3030/jsonstore/collections/books';
    const results = document.getElementById('results');
    const title = formData.get('title');
    const author = formData.get('author');
    if(title!='' && author!=''){
        const result = {author: author, title: title};
        fetch(url,{
            method: 'post', 
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(result)
        })
        .then(r => r.json())
        .then(element => {
         const tr = document.createElement('tr');
         const tdOne = document.createElement('td');
         tdOne.textContent = element['title'];
         const tdTwo = document.createElement('td');
         tdTwo.textContent = element['author'];
         const tdThree = document.createElement('td');
         const editBtn = document.createElement('button');
         editBtn.id = element._id;
         editBtn.textContent ='Edit';
         editBtn.addEventListener('click', editFun);
         const deleteBtn = document.createElement('button');
         deleteBtn.id = element._id;
         deleteBtn.textContent = 'Delete';
         deleteBtn.addEventListener('click', deleteFun);
         tdThree.appendChild(editBtn);
         tdThree.appendChild(deleteBtn);
         tr.appendChild(tdOne);
         tr.appendChild(tdTwo);
         tr.appendChild(tdThree);
         results.appendChild(tr);
         document.getElementById('form').reset();
        })
    }
}


function deleteFun(e){
const url = 'http://localhost:3030/jsonstore/collections/books/';
   const id = e.target.id;
   fetch(url + id, {
       method: 'delete'
   }).then(r => r.json())
   .then(r => {
       e.target.parentElement.parentElement.replaceChildren();
   })
}

function editFun(e){
  e.preventDefault();
  document.getElementById('form').style.display = 'none';
  document.getElementById('form-save').style.display = 'block';
  const textAuthor = e.target.parentElement.previousSibling.textContent;
  const textTitle =e.target.parentElement.previousSibling.previousSibling.textContent;
  document.querySelector('#form-save input').value = textTitle;
  document.querySelectorAll('#form-save input')[1].value = textAuthor;
  document.querySelector('#form-save button').addEventListener('click', (ev) => {
      const title =  document.querySelector('#form-save input').value;
      const author =  document.querySelectorAll('#form-save input')[1].value;
      const result = {title: title, author: author};
      const url = 'http://localhost:3030/jsonstore/collections/books/';
      const id= e.target.id;
      fetch(url+id, {
          method: 'put', 
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(result)
      })
      .then(r => r.json())
      .then(r => {
      e.target.parentElement.previousSibling.textContent = r.author;
      e.target.parentElement.previousSibling.previousSibling.textContent = r.title;
      document.getElementById('form').style.display = 'block';
      document.getElementById('form-save').style.display = 'none';
      })
    })
  }
  
 
