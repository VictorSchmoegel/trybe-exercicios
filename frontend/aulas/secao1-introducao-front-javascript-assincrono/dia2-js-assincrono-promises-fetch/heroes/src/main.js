import Swal from 'sweetalert2';
import './style.css';

// Seletores
const btn = document.querySelector('#button');
const img = document.querySelector('#image');
const nome = document.querySelector('#name');
const token = '5924987730933295';
const api = `https://www.superheroapi.com/api.php/${token}`;
const ids = 700;

// função para gerar um número aleatório

const randomId = () => Math.floor(Math.random() * ids);

// Função para adicionar o evento click no botão

btn.addEventListener('click', (e) => {
  e.preventDefault();
  const id = randomId();
  fetch(`${api}/${id}`)
    .then((response) => response.json())
    .then((data) => {
      img.src = data.image.url;
      nome.innerHTML = data.name;
    })
    .catch((error) => Swal.fire({
      title: 'Hero not found',
      text: error.message,
      icon: 'Error',
      confirmButtonText: 'Cool',
    }));

});