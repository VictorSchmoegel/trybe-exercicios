/* Imagine que você tenha ficado responsável por criar uma página de carrinho de compras e para isso é necessário realizar a soma de todos os itens do carrinho para retornar o valor final da compra.

O preço dos itens do carrinho estão dentro de um array e, para resolver esse problema, você pode utilizar o reduce, que é responsável por passar por cada um dos valores, reduzindo o array a um único valor, que nesse caso é o valor total da compra.

Mas como o reduce funciona? 🤔

Diferente das outras HOFs, o reduce recebe dois parâmetros: o primeiro é uma callback, e o segundo parâmetro é um valor inicial (que é opcional).

A sintaxe do reduce é a seguinte: */

array.reduce(callback, valorInicial);

/* O valorInicial é o valor da primeira iteração e, em geral, ao realizar somas, esse valor é 0.

Já a callback é a função que vai passar por cada um dos itens do array, e ela pode receber até 4 parâmetros, sendo eles:

Acumulador: que é o valor que vai ser acumulado a cada iteração;
Valor atual: que é o valor atual do item, a ser adicionado no acumulador;
Index atual: que é o index do item que está sendo iterado naquele momento;
Array: que é o array original. */

array.reduce((acumulador, valorAtual, indexAtual, array) => { "código" }, valorInicial);

/* Os parâmetros acumulador e valor atual em geral são escritos em inglês e abreviados. Sendo assim:

o acumulador é chamado de acc (accumulator);
o valor atual é chamado de curr (current value). 

Temos então que acc, abreviatura de accumulator, ou acumulador, deve obrigatoriamente ser o primeiro parâmetro da callback, e o curr, abreviatura de currentValue, ou valor atual, também obrigatório, deve ser o segundo parâmetro da callback. Sendo assim, para trabalhar com a função reduce você deve ter algo parecido com o código abaixo:*/

array.reduce((acc, curr) => {
  // escopo de execução da função
}, valorInicial);

/* A função do acumulador (acc) é guardar o retorno da callback a cada iteração, e a função do curr é acessar cada um dos valores do array.

O código abaixo possui um array simulando o valor dos itens no carrinho de compras e a função do reduce para mostrar o que cada um dos parâmetros retorna. Execute o código abaixo no console do seu navegador e veja o que ele retorna: */

const valorItens = [1, 32, 44, 2, 3];

valorItens.reduce((acc, curr) => {
  console.log(`acumulador - acc:`, acc);
  console.log(`valorAtual - curr:`, curr);
}, 0);

valorItens.reduce((acc, curr) => {
  console.log(`acc:`, acc);
  console.log(`curr:`, curr);
  console.log('a soma atual é', acc + curr);

  return acc + curr;
}, 0);

// Veja também que, ao invés de passar a lógica direto dentro da callback do reduce, você pode criar uma função externa e chamá-la como sendo o parâmetro callback:

const numbers = [1, 32, 44, 2, 3];

const sumNumbers =  (acc, curr) => acc + curr;

const totalSum = numbers.reduce(sumNumbers, 30);

console.log(totalSum);

// Tente criar a função que busca o maior valor do array numbers utilizando apenas o reduce.

const numbers1 = [50, 85, -30, 3, 15];

numbers1.reduce((acc, curr) => acc > curr ? acc : curr);

// Resolvendo em uma função

const numbers2 = [50, 85, -30, 3, 15];

const highnumber = (acc, curr) => ((acc > curr) ? acc : curr);
const high = numbers2.reduce(highnumber);
console.log(high);

// Para fixar ainda mais o conceito de reduce, faça uma função que some todos os números pares do array numbers:

const numbers3 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const evenValues = numbers3.filter((even) => even % 2 === 0);

const sumEvenValues = (acc, curr) => acc + curr;
const totalEvenValues = evenValues.reduce(sumEvenValues, 0);

console.log(totalEvenValues);

// Agora, crie uma função usando dados de estudantes, para mostrar na tela um relatório que diz em qual matéria a pessoa foi melhor. Você usará tanto o map quanto o reduce dentro dele!

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

const melhorMateria = (acc, curr) => ((acc.nota > curr.nota) ? acc : curr);

const mapeando = estudantes.map((estudante) => ({
  nome: estudante.nome,
  materia: estudante.materias.reduce((acc, curr) => (acc.nota > curr.nota) ? acc : curr).name
}));

console.log(mapeando);