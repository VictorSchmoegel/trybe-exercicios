// array.sort
// Ao trabalhar com strings e utilizar o sort sem nenhum parâmetro, ele entende que é para ordenar por ordem alfabética. Nesse caso, quando há elementos como números, o sort converte para string e realiza a comparação de acordo com a tabela de caracteres unicode (universal character encoding standard) e, nela, o computador entende que o número 10, número 1 seguido do número 0, vem antes do número 2.

const inventory = [1, 3, 2, 5, 4, 6, 7, 8, 9, 10];
inventory.sort();
console.log(inventory);

// O sort pode receber uma função como parâmetro

const inventory1 = [1, 3, 2, 5, 4, 6, 7, 8, 9, 10];
inventory.sort((a, b) => a - b);
console.log(inventory1);

// A lógica é a seguinte: a função sort recebe todos os elementos do array e realiza a comparação de cada um deles em pares (elemento1, elemento2). Se a operação elemento1 - elemento2 der resultado negativo, o elemento1 vai para trás. Caso contrário, vai para frente.

// Ordenação de arras de objetos com sort.

// Para fixar

// A nova tarefa do seu time de desenvolvimento é organizar o sistema de pessoas colaboradoras de uma rede de mercados. Para isso: Utilize o sort para ordenar o array pela idade das pessoas em ordem crescente.

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
];
  
people.sort((a, b) => b.age - a.age);  
  
console.log(people);