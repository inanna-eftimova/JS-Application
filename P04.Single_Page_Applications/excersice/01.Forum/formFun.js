export function formFun(e){
    e.preventDefault();

  const formData = new FormData(e.target);
  const username = formData.get('username');
  const postText = formData.get('postText');
  if(username!=''&&postText!=''){
  const url = 'http://localhost:3030/jsonstore/collections/myboard/comments';
  fetch(url, {
      method: 'post',
      headers: {'Content-Type': 'applicaton/json'},
      body: JSON.stringify({postText, username})
  }).then(r => r.json())
  .then(r => {
      
      const divUser = document.createElement('div');
      divUser.classList.add('user-comment');
      const divTopicNameWallpaper = document.createElement('div');
      divTopicNameWallpaper.classList.add('topic-name-wrapper');
      const divTopicName = document.createElement('div');
      divTopicName.classList.add('topic-name');
      const p = document.createElement('p');
      const strong = document.createElement('strong');
      strong.textContent = r.username;
      let today = new Date();
      let date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate()+', '+today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
      const time = document.createElement('time');
      time.textContent = date;
      p.textContent = `${strong.textContent} commented on ${date}`;
      const divPost = document.createElement('div');
      divPost.classList.add('post-content');
      const pText = document.createElement('p');
      pText.textContent = r.postText;
      divPost.appendChild(pText);
      divTopicName.appendChild(p);
      divTopicName.appendChild(divPost);
      divTopicNameWallpaper.appendChild(divTopicName);
      divUser.appendChild(divTopicNameWallpaper);
      e.target.parentElement.parentElement.previousSibling.appendChild(divUser);
      e.target.reset();
      
  }) 
  }else{
      alert('Invalid input!');
  }
};

{
}