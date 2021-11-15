function getInfo(){
    const label = document.getElementById('stopId').value;
    const url = 'http://localhost:3030/jsonstore/bus/businfo/' + label;
    const stopName = document.getElementById('stopName');
    const busesList = document.getElementById('buses');
    busesList.replaceChildren();
    fetch(url)
    .then(r=>r.json())
    .then(data => {
        const name = data.name;
        const buses = data.buses;
        stopName.textContent = name;
            Object.keys(buses).forEach(element =>{
            const li = document.createElement('li');
            li.textContent = `Bus ${element} arrives in ${buses[element]} minutes`;
            busesList.appendChild(li);
    });    
    })
    .catch(stopName.textContent = 'Error');
    
    
}