// Existem outras HOFs que iteram pelos arrays e retornam valores, como outros arrays ou booleanos. O forEach é responsável por executar uma ação em cada elemento do array, mas não possui retorno.

// Por exemplo, para transformar um array de pessoas aprovadas em um concurso para letras maiúsculas, você pode fazer o seguinte:

const pessoasAprovadas = ['Ana Beatriz', 'Caio Nunes', 'Afonso Ribeiro', 'Leonardo Lins'];

pessoasAprovadas.forEach((nome, index) => {
    pessoasAprovadas[index] = pessoasAprovadas[index].toLocaleUpperCase();
});

console.log(pessoasAprovadas);

// Tabuada do 2 com forEach

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach((element) => {
    console.log(element * 2);
});

// também pode deixar esse código em apenas uma linha. Para isso, basta remover as chaves {} e deixar o console logo após a arrow. Observe o exemplo abaixo:

const numbers1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers1.forEach((element) => console.log(element * 2));

// também pode separar a callback do forEach em uma outra função. Veja o exemplo abaixo:

const numbers2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multiply = (element) => {
  console.log(element * 2);
}

numbers.forEach(multiply);

// Para fixar

const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
];
  
emailListInData.forEach((email, posicao) => {
    console.log(`O email ${email} está cadastradado na posição ${posicao} em nosso banco de dados`);
});