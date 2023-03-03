// As funções 'some e every' são parecidas e retornam valores booleanos.

// A função 'some' retorna true se ao menos um elemento de um array satisfaz a uma condição. Já o 'every' retorna true se todos os elementos de um array satisfazem a uma condição.

// Exemplo array.some: Verificar se pelo menos uma dessas pessoas possui o cargo de gerência.

const pessoas = [
    { nome: 'Ana', cargo: 'Analista' },
    { nome: 'João', cargo: 'Gerência' },
    { nome: 'Aline', cargo: 'Analista' },
    { nome: 'Joana', cargo: 'Gerência' },
];

const verify = pessoas.some((pessoa) => pessoa.cargo === 'Gerência');
console.log(verify);

const verifyProduct = pessoas.some((pessoa) => pessoa.cargo === 'Product Owner');
console.log(verifyProduct);

// verificar se existe algum nome que comece com a letra desejada. Analise e execute o código abaixo:

const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const firstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(firstLetter('M', listNames));


// Array.every

// Imagine que você pegou um boletim escolar antigo e quer verificar se passou em todas as matérias. Como você faria?

// Ao utilizar a função every, você consegue resolver esse problema. Caso tenha passado em todas as matérias, o retorno será true; caso contrário, será false. Analise e execute o código abaixo:

const grades = {
    portugues: 'Aprovado',
    matematica: 'Reprovado',
    ingles: 'Aprovado',
};
  
const verifyGrades = Object.values(grades).every((grade) => grade === 'Aprovado');
  
console.log(verifyGrades);

// Para fixar:  Você ficou responsável por conferir a lista de pessoas convidadas de uma festa de casamento e precisa verificar se o nome da pessoa está ou não na lista. Para isso, você deve utilizar o código abaixo e desenvolver sua lógica a partir dele:


const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((myName) => myName === name);
};

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));

// Para fixar: Você ficou responsável por criar um sistema que verifica se as pessoas da mesma turma possuem uma determinada faixa de idade. Você deve utilizar o array people e desenvolver a sua lógica a partir dele. Para isso:

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
];
  
const verifyAges = (array, idade) => {
    return array.every((name) => name.age >= idade);
};    
  
console.log(verifyAges(people, 18));
console.log(verifyAges(people, 14));

