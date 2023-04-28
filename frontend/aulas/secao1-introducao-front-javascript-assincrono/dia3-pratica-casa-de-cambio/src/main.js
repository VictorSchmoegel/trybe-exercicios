import Swal from "sweetalert2";
import './style.css';
// Seletores

const searchBtn = document.querySelector('button');
const coinInput = document.querySelector('#coin-input');
const coinTilte = document.querySelector('#coin-title');
const coinList = document.querySelector('#valores');

const renderCoins = (coins) => {
  coinList.innerHTML = '';
  const coinArray = Object.entries(coins);
  console.log(coinArray);
  coinArray.forEach((coin) => {
    const [coinName, value] = coin;
    const li = document.createElement('li');
    li.innerHTML = `${coinName} - ${value}`;
    coinList.appendChild(li)
  })
}

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const coin = coinInput.value;
  if (!coin) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Digite uma moeda',
    });
    return;
  }
  const endPoint = `https://api.exchangerate.host/latest?base=${coin}`;
  let rates;
  fetch(endPoint)
    .then((res) => res.json())
    .then((data) => {
      if(data.base !== coin.toUpperCase()) {
        throw new Error('Moeda não existente');
      }
      console.log(data.rates);
      renderCoins(data.rates)
    })
    .catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Digite uma moeda válida',
      });
      coinTilte.innerHTML = '';
    });
    
  coinTilte.innerHTML = `Valores referentes a 1 ${coin.toUpperCase()}`;


})
