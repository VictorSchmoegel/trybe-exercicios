// O filter é uma função responsável por realizar algum tipo de filtro no array, de acordo com uma condição.

// Imagine que você tenha ficado responsável por um sistema de cadastro de clientes de uma loja de roupas e precise apenas dos nomes. Ao salvar o cadastro, o nome e o número do telefone foram salvos dentro de um mesmo array.

// O código abaixo mostra como ficou o resultado do array:

const dados = ['Luca', 91234567, 'Ana', 92345678, 'Marlete', 93456789];

// para recuperar apenas os nomes:

const nomes = dados.filter((nomes) =>  typeof nomes === 'string');
console.log(nomes);

// Imagine agora que você possua um array chamado listaNumeros com os valores 10, 20, 30, 40.

const listaNumeros = [10, 20, 30, 40];
const maiorVinte = listaNumeros.filter((num) => num > 20);

console.log(maiorVinte);

// Filter em array de objetos

const notaEstudante = [
  {
    nome : 'Marcos',
    nota: 100
  },
  {
    nome : 'Camila',
    nota: 50
  },
  {
    nome : 'Eduardo',
    nota: 80
  },
  {
    nome : 'Maria',
    nota: 70
  },
];

const estudantesAprovados = notaEstudante.filter((pessoa) => pessoa.nota >= 80);
console.log(estudantesAprovados);