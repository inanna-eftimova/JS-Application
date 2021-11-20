const url = 'http://localhost:3030/jsonstore/collections/students';
const resultTable = document.getElementById('resultLabel');
fetch(url)
    .then(r => r.json())
    .then(r => {
        Object.values(r).forEach(el => {
            const tr = document.createElement('tr');
            const thName = document.createElement('th');
            thName.textContent = `${el.firstName}\n`;
            const thFamillia = document.createElement('th');
            thFamillia.textContent = `${el.lastName}\n`;
            const thNumber = document.createElement('th');
            thNumber.textContent = `${el.facultyNumber}\n`;
            const thGrade = document.createElement('th');
            thGrade.textContent = `${el.grade}\n`;
            tr.appendChild(thName);
            tr.appendChild(thFamillia);
            tr.appendChild(thNumber);
            tr.appendChild(thGrade);
            resultTable.appendChild(tr);
        });
    });

document.getElementById('form').addEventListener('submit', submitFun);

function submitFun(e) {
    e.preventDefault();
    const url = 'http://localhost:3030/jsonstore/collections/students';
    const resultTable = document.getElementById('resultLabel');
    let formData = new FormData(e.target);
    const name = formData.get('firstName');
    const famillia = formData.get('lastName');
    const number = formData.get('facultyNumber');
    const grade = formData.get('grade');
    console.log(Number(grade));
    if (name == '' || famillia == '' || number == '' || isNaN(Number(grade))) {
        return;
    }
    const result = { firstName: name, lastName: famillia, facultyNumber: number, grade: grade };
    fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result),
    })
        .then(r => r.json())
        .then(el => {
            const tr = document.createElement('tr');
            const thName = document.createElement('th');
            thName.textContent = `${el.firstName}\n`;
            const thFamillia = document.createElement('th');
            thFamillia.textContent = `${el.lastName}\n`;
            const thNumber = document.createElement('th');
            thNumber.textContent = `${el.facultyNumber}\n`;
            const thGrade = document.createElement('th');
            thGrade.textContent = `${el.grade}\n`;
            tr.appendChild(thName);
            tr.appendChild(thFamillia);
            tr.appendChild(thNumber);
            tr.appendChild(thGrade);
            resultTable.appendChild(tr);
            document.getElementById('form').reset();
        });
}


