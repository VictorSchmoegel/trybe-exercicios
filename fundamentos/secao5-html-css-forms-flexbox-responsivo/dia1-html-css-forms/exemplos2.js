// SELETORES
const inputText = document.querySelector("#input-text");
const inputCheckbox = document.querySelector("#input-checkbox");
const href = document.querySelector("#href");


href.addEventListener('click', (event) => {
    event.preventDefault();
});

inputCheckbox.addEventListener('click', (event) => {
    event.preventDefault();
});

inputText.addEventListener('keypress', (event) => {
    const letra = event.key;
    if (letra !== 'a') {
        event.preventDefault();
    }
});