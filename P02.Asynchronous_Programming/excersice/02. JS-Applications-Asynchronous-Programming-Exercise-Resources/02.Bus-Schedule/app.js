function solve() {
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    let id = "depot";
    function depart() {
        const url = `http://localhost:3030/jsonstore/bus/schedule/` + id;
        const text = document.querySelector('.info');
        fetch(url)
        .then(r => r.json())
        .then(obj =>{
        text.textContent = `Next stop ` + obj.name;
         departBtn.disabled = true;
         arriveBtn.disabled = false;
        })
        .catch(e => {
            text.textContent = `Error`;
            departBtn.disabled = true;
            arriveBtn.disabled = true;
        })
    }

    function arrive() {
        const url = `http://localhost:3030/jsonstore/bus/schedule/` + id;
        const text = document.querySelector('.info');
        fetch(url)
        .then(r => r.json())
        .then(obj =>{
        text.textContent = `Arrived ` + obj.name;
        id = obj.next;
         departBtn.disabled = false;
         arriveBtn.disabled = true;
        })
        .catch(e => {
            text.textContent = `Error`;
            departBtn.disabled = true;
            arriveBtn.disabled = true;
        })
    }

    return {
        depart,
        arrive
    };
}

let result = solve();