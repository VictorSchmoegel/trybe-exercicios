/*================================ EXERCÍCIO 01 ================================*/
console.log('\n------------------- Exercício 01 -------------------\n')

function imprimeIdade() {
    for (let idade = 30; idade <= 40; idade += 1) {
      console.log('Idade dentro do for:', idade)
    }
  }
  imprimeIdade()

/*================================ EXERCÍCIO 02 ================================*/
console.log('\n------------------- Exercício 02 -------------------\n')

  const pessoa = {
    nome: 'Henri',
    idade: 20
  }
  pessoa.nome = 'Luna'
  pessoa.idade = 19
  console.log('Nome:', pessoa.nome);
  console.log('Idade:', pessoa.idade);

/*================================ EXERCÍCIO 03 ================================*/
console.log('\n------------------- Exercício 03 -------------------\n')

let favoriteFood = 'Lasanha';
favoriteFood = 'Hamburguer';
console.log(favoriteFood);

/*================================ EXERCÍCIO 04 ================================*/
console.log('\n------------------- Exercício 04 -------------------\n')

const name1 = 'Adriana';
const lastName = 'Soares';
console.log(`Olá, ${name1} ${lastName}!`);
function soma(a,b) {
  let resultado = a + b;
  return resultado;
}
let a = 3;
let b = 5;
console.log(`O resultado da soma de ${a} + ${b} é: ${soma(a,b)}`);

/*================================ EXERCÍCIO 05 ================================*/
console.log('\n------------------- Exercício 05 -------------------\n')

const numeroAleatorio = () => Math.random(0, 10);
console.log(numeroAleatorio());

/*================================ EXERCÍCIO 06 ================================*/
console.log('\n------------------- Exercício 06 -------------------\n')

const hello = (nome) => `Olá ${nome}!`
let nome = 'Ivan';
console.log(hello(nome));

/*================================ EXERCÍCIO 07 ================================*/
console.log('\n------------------- Exercício 07 -------------------\n')

const nomeCompleto = (nome, sobrenome) => `Olá ${nome} ${sobrenome}`
let sobrenome = 'Pires'
console.log(nomeCompleto(nome, sobrenome));

/*================================ EXERCÍCIO 08 ================================*/
console.log('\n------------------- Exercício 08 -------------------\n')

let speed = 900;
const speedCar = (speed) => (speed >= 120) ? 'Vocẽ ultrapassou o limite de velocidade' : 'Você está na velocidade permitida';
console.log(speedCar(speed));