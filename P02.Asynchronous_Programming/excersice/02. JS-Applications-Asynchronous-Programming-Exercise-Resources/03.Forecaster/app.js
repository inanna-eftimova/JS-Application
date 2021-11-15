function attachEvents() {
   document.getElementById('submit').addEventListener('click', getWether);
}
const obj = {
    'Sunny': '&#x2600',
    'Partly sunny': '&#x26C5',
    'Overcast': '&#x2601',
    'Rain': '&#x2614'
}
function getWether(){
    const input = document.getElementById('location');
    const forecast = document.getElementById('forecast');
    const current = document.getElementById('current');
    const upcoming = document.getElementById('upcoming');
    let bool = false;
    let code = '';
    fetch('http://localhost:3030/jsonstore/forecaster/locations')
    .then(el => el.json())
    .then(arr => {
        current.replaceChildren();
        const divP = document.createElement('div');
        divP.textContent = 'Current coundition';
        divP.classList.add("label");
        current.appendChild(divP);
        upcoming.replaceChildren();
        const divPp = document.createElement('div');
        divPp.classList.add("label");
        divPp.textContent = 'Three-day forecast';
        upcoming.appendChild(divPp);
       for (const element of arr) {
           if(element.name == input.value ){
               bool = true;
               code = element.code;
               forecast.style.display = 'block';
               const requestUrl = 'http://localhost:3030/jsonstore/forecaster/today/' + code;
               fetch(requestUrl)
               .then(e => e.json())
               .then(el =>{
                   const span = document.createElement('span');
                   span.classList.add("condition");
                   span.classList.add("symbol");
                   span.innerHTML = obj[el.forecast.condition];
                   current.appendChild(span);
                   const spanInfo = document.createElement('span');
                   span.classList.add("condition");
                   const spanInfoName = document.createElement('span');
                   spanInfoName.classList.add("forecast-data");
                   spanInfoName.textContent = `${el.name}`;
                   const spanInfoC = document.createElement('span');
                   spanInfoC.classList.add("forecast-data");
                   spanInfoC.innerHTML = `${el.forecast.low}&#176/${el.forecast.high}&#176`;
                   const spanInfoType = document.createElement('span');
                   spanInfoType.classList.add("forecast-data");
                   spanInfoType.textContent = `${el.forecast.condition}`;
                   spanInfo.appendChild(spanInfoName);
                   spanInfo.appendChild(spanInfoC);
                   spanInfo.appendChild(spanInfoType);
                   current.appendChild(spanInfo);
               }) .catch(er => {
                forecast.style.display = 'block';
                   forecast.textContent = 'Error'});

               const threeDaysUrl = 'http://localhost:3030/jsonstore/forecaster/upcoming/' + code;
               fetch(threeDaysUrl)
               .then(e => e.json())
               .then(r =>{
                   const newDiv = document.createElement('div');
                   newDiv.classList.add("forecast-info");
                   for (const el of r.forecast) {
                       const newSpan = document.createElement('span');
                       newSpan.classList.add("upcoming");
                       const spanOne = document.createElement('span');
                       spanOne.classList.add("symbol");
                       spanOne.innerHTML = obj[el.condition];
                       const spanTwo = document.createElement('span');
                       spanTwo.classList.add("forecast-data");
                       spanTwo.innerHTML = `${el.low}&#176/${el.high}&#176`;
                       const spanThree = document.createElement('span');
                       spanThree.classList.add("forecast-data");
                       spanThree.textContent = `${el.condition} `;
                       newSpan.appendChild(spanOne);
                       newSpan.appendChild(spanTwo);
                       newSpan.appendChild(spanThree);
                       newDiv.appendChild(newSpan);
                   }
                   upcoming.appendChild(newDiv);
               }) .catch(er => {
                   forecast.style.display = 'block';
                   forecast.textContent = 'Error'});
           }
       }
       if(bool == false){
        current.replaceChildren();
        const divP = document.createElement('div');
        divP.textContent = 'Error';
        divP.classList.add("label");
        current.appendChild(divP);
        upcoming.replaceChildren();
       }
    })
    .catch(er => {
        forecast.style.display = 'block';
        forecast.textContent = 'Error'});
       
}

attachEvents();