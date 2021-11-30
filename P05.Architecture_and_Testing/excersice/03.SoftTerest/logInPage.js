export function logIn(e){
    e.preventDefault();
    document.querySelectorAll('section').forEach(x => x.classList.add('hide'));
    document.getElementById('logIn').classList.remove('hide');
}