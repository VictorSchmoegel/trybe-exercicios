// Vídeo muito importante

// Utilizando o for normal

const persons = [
    { firstName: 'Maria', lastName: 'Ferreira' },
    { firstName: 'João', lastName: 'Silva' },
    { firstName: 'Antonio', lastName: 'Cabral' },
];
  
const fullNames = [];
  
for (let index = 0; index < persons.length; index += 1) {
fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
}
  
console.log(fullNames);

// Utilizando o map

const persons1 = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames1 = persons1.map((person1) => `${person1.firstName} ${person1.lastName}`);

console.log(fullNames1);

// Vamos praticar um outro exemplo numérico, para fixar bem o que o map faz. Suponha que seja preciso transformar todos os números em negativo e passá-los para um array novo.

const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number));

console.log(numbers);
console.log(negativeNumbers);

// Outras formas de usar o .map é unir dois arrays para criar um novo. Considere que você possui duas listas: o preço do primeiro produto (Arroz) é o primeiro elemento da lista prices (2.99), e assim por diante:

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => ({[product]: listPrices[index]}
));

const listProducts = updateProducts(products, prices);
console.log(listProducts);