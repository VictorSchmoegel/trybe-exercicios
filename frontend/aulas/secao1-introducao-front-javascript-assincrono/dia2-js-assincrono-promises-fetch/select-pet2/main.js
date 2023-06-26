const randomDogBtn = document.querySelector('#dogBtn');
const randomCatBtn = document.querySelector('#catBtn');
const randomPet = document.querySelector('#surpriseBtn');
const img = document.querySelector('img');

const DOG_URL = 'https://dog.ceo/api/breeds/image/random';
console.log(DOG_URL);
const CAT_URL = 'https://aws.random.cat/meow';
console.log(CAT_URL);

randomDogBtn.addEventListener('click', (event) => {
    event.preventDefault();

    fetch(DOG_URL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            img.src = data.message
        });
});

randomCatBtn.addEventListener('click', (event) => {
    event.preventDefault();
    
    fetch(CAT_URL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            img.src = data.file
        });
});

randomPet.addEventListener('click', (event) => {
    event.preventDefault();

    Promise.any([
        fetch(DOG_URL),
        fetch(CAT_URL),
    ])
    .then((response) => response.json())
    .then((data) => {
        img.src = data.file || data.message;
    });
});