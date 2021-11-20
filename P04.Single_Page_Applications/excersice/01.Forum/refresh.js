import { formFun } from "./formFun.js";

export function refresh(e){
   e.preventDefault();
   const url = 'http://localhost:3030/jsonstore/collections/myboard/posts';
   const formData = new FormData(document.getElementById('form'));
   const topicName = formData.get('topicName');
   const username = formData.get('username');
   const postText = formData.get('postText');
   if(topicName!='' && username!='' && postText!=''){
       fetch(url, {
           method: 'post',
           headers: {'Content-Type': 'application/json'},
           body: JSON.stringify({topicName,username,postText})
       }).then(r => r.json())
       .then(r => {
           
           const topicContainer = document.querySelector('.topic-container');
           const div = document.createElement('div');
           div.classList.add('topic-container');
           const divWallpaper = document.createElement('div');
           divWallpaper.classList.add('topic-name-wrapper');
           const divTopicName = document.createElement('div');
           divTopicName.classList.add('topic-name');
           const a = document.createElement('a');
           a.href = '#';
           a.classList.add('normal');
           const h2 = document.createElement('h2');
           h2.id = r.topicName;
           h2.textContent = r.topicName;
           a.appendChild(h2);
           const divCollums = document.createElement('div');
           divCollums.classList.add('columns');
           const pureDiv = document.createElement('div');
           const p = document.createElement('p');
           p.textContent = 'Date: ';
           const time = document.createElement('time');
           let today = new Date();
           let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+'-'+today.getHours()+'-'+today.getMinutes()+'-'+today.getSeconds();
           const event = new Date();
           time.textContent = event.toISOString(date);
           p.appendChild(time);
           const divNickName = document.createElement('div');
           divNickName.classList.add('nick-name');
           const pUsername = document.createElement('username');
           pUsername.textContent = 'Username: ';
           const spanUsername = document.createElement('span');
           spanUsername.textContent = r.username;
           pUsername.appendChild(spanUsername);
           divNickName.appendChild(pUsername);
           pureDiv.appendChild(p);
           pureDiv.appendChild(divNickName);
           divCollums.appendChild(pureDiv);
           divTopicName.appendChild(a);
           divTopicName.appendChild(divCollums);
           divWallpaper.appendChild(divTopicName);
           div.appendChild(divWallpaper);
           topicContainer.appendChild(div);


           const divThemeContent = document.createElement('div');
           divThemeContent.classList.add('theme-content');
           const divThemeTitle = document.createElement('div');
           divThemeTitle.classList.add('theme-title');
           const divThemeNameWallpaper = document.createElement('div');
           divThemeNameWallpaper.classList.add('theme-name-wrapper');
           const divThemeName = document.createElement('div');
           divThemeName.classList.add('theme-name');
           const h2Title = document.createElement('h2');
           h2Title.textContent = r.topicName;
           divThemeContent.appendChild(divThemeTitle);
           divThemeTitle.appendChild(divThemeNameWallpaper);
           divThemeNameWallpaper.appendChild(divThemeName);
           divThemeName.appendChild(h2Title);

           const divComment = document.createElement('div');
           
           divComment.classList.add('comment');
           
           const divHeader = document.createElement('div');
           divHeader.classList.add('header');
           const img = document.createElement('img');
           img.src = './static/profile.png';
           img.alt = 'avatar';
           const pst = document.createElement('p');
           const spanP = document.createElement('span');
           spanP.textContent = r.username;
           let today1 = new Date();
           let date1 = today1.getFullYear()+'-'+(today1.getMonth()+1)+'-'+today1.getDate()+', '+today1.getHours()+':'+today1.getMinutes()+':'+today1.getSeconds();
           pst.textContent = `${spanP.textContent} posted on ${date1}`;
           const pInfo = document.createElement('p');
           pInfo.classList.add('post-content');
           pInfo.textContent = r.postText;
           document.getElementById('form').reset();
           divHeader.appendChild(img);
           divHeader.appendChild(pst);
           divHeader.appendChild(pInfo);
           divComment.appendChild(divHeader);
           divThemeContent.appendChild(divComment);
           divThemeContent.id = `${r.topicName}1`;
           divThemeContent.classList.add('hidden');

           const divAnswerComment = document.createElement('div');
           divAnswerComment.classList.add('answer-comment');
           const P = document.createElement('p');
           const Span = document.createElement('span');
           Span.textContent = 'currentUser';
           P.textContent = `${Span.textContent} comment:`;
           const divAnswer = document.createElement('div');
           divAnswer.classList.add('answer');
           const formComment = document.createElement('form');
           const textArea = document.createElement('textarea');
           textArea.name = 'postText';
           textArea.id = 'comment';
           textArea.cols = 30;
           textArea.rows = 10;
           const divForm = document.createElement('div');
           const label = document.createElement('label');
           label.for = "username";
           const spanLabel = document.createElement('span');
           spanLabel.classList.add('red');
           spanLabel.textContent = '*';
           label.textContent = `Username: ${spanLabel.textContent}`;
           const input = document.createElement('input');
           input.type = 'text';
           input.name = 'username';
           input.id = 'username';
           const buttonForm = document.createElement('button');
           buttonForm.textContent = 'Post';
           divForm.appendChild(label);
           divForm.appendChild(input);
           formComment.appendChild(textArea);
           formComment.appendChild(divForm);
           formComment.appendChild(buttonForm);
           divAnswer.appendChild(formComment);
           divAnswerComment.appendChild(P);
           divAnswerComment.appendChild(divAnswer);
           divThemeContent.appendChild(divAnswerComment);

           document.getElementById('container').appendChild(divThemeContent);
           

           Array.from(document.getElementsByTagName('a')).forEach(el => el.addEventListener('click', ankar, false));

function ankar(e){
    e.preventDefault();
    const id = `${e.target.textContent}1`;
    document.getElementById('main').classList.add('hidden');
    if(document.getElementById(id).classList.contains('hidden')){
        document.getElementById(id).classList.remove('hidden');
    }
    
    document.getElementById(id).querySelector('form').addEventListener('submit', formFun);
}
       })

   }else{
       alert('All the fields must be filled up!');
       document.getElementById('form').reset();
   }
};

// {<div class="comment">
// <div class="header">
//     <img src="./static/profile.png" alt="avatar">
//     <p><span>David</span> posted on <time>2020-10-10 12:08:28</time></p>

//     <p class="post-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facere sint
//         dolorem quam,
//         accusantium ipsa veniam laudantium inventore aut, tenetur quibusdam doloribus. Incidunt odio
//         nostrum facilis ipsum dolorem deserunt illum?</p>
// </div>
