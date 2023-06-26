import Swal from 'sweetalert2';

const button = document.querySelector('button');
const img = document.querySelector('img');
const heroName = document.querySelector('p');

const randomNumber = () => Math.floor(Math.random() * 732);
const ACCESS_TOKEN =  '5924987730933295';
const URL_API = `https://www.superheroapi.com/api.php/${ACCESS_TOKEN}`
console.log(URL_API);

button.addEventListener('click', (event) => {
    event.preventDefault();

    const id = randomNumber();

    fetch(`${URL_API}/${id}`)
        .then((response) => response.json())
        .then((data) => {
            img.src = data.image.url;
            heroName.innerHTML = data.name;
        })
        .catch((error) => Swal.fire({
            title: 'Hero not found',
            text: error.message,
            icon: 'error',
            confirmButtonText: 'Cool',
        }));
});