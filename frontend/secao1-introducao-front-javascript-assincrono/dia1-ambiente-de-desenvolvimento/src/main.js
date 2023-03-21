import { nanoid } from "nanoid";
import copy from 'clipboard-copy';

import './style.css';

const passwordBtn = document.querySelector('button');
const pass = document.querySelector('h2');

passwordBtn.addEventListener('click', () => {
    const randomPassword = nanoid();
    pass.innerHTML = randomPassword;
});

pass.addEventListener('click', (e) => {
    copy(e.target.innerHTML);
    alert('Senha copiada!');
});