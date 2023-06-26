import './style.css';

// Seletores

const btnDog = document.querySelector('#btnDog');
const image = document.querySelector('img');
const btnCat = document.querySelector('#btnCat');
const randomBtn = document.querySelector('#btnSurprise');

btnDog.addEventListener('click', (e) => {
  e.preventDefault();
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => {
      const foto = data.message;
      image.src = foto;
    });
});

btnCat.addEventListener('click', (e) => {
  e.preventDefault();
  fetch('https://aws.random.cat/meow')
    .then((response) => response.json())
    .then((data) => {
      const fotoGato = data.file;
      image.src = fotoGato;
    });
});

randomBtn.addEventListener('click', (e) => {
  e.preventDefault();
  Promise.any([
    fetch('https://dog.ceo/api/breeds/image/random'),
    fetch('https://aws.random.cat/meow')
  ])
  .then((res) => res.json())
  .then((data) => {
    const fotoRandom = data.message || data.file
    image.src = fotoRandom
  });
});