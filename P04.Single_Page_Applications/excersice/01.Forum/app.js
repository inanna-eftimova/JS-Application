import { cancel } from "./cancel.js";
import { refresh } from "./refresh.js";

document.getElementById('postBtn').addEventListener('click', refresh);
document.getElementById('cancel').addEventListener('click', cancel);
document.getElementById('a').addEventListener('click', (r) => {
    
    document.getElementById('main').classList.remove('hidden');
    document.querySelectorAll('.theme-content').forEach(x => x.classList.add('hidden'));
});