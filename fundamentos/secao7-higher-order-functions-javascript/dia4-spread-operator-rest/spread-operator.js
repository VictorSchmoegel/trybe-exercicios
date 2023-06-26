/* Utilizando spread em arrays
A sintaxe do spread para utilizar em arrays é composta por:

uma variável, que vai salvar o novo array;
os colchetes, que caracterizam que é um array;
os três pontos ..., que caracterizam que uma informação está sendo espalhada. Nesse caso, o array original;
o elemento a ser adicionado.
Observe como fica a sintaxe do spread em arrays: */

// const variavel = [...arrayOriginal, itemParaAdicionar];

// array original
const items = ['Camiseta', 'Carregador', 'Chinelo'];


const newItems = [...items, 'camiseta'];

console.log(newItems);

// Exemplo

const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months);