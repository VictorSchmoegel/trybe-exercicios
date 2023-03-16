/*================================ EXERCÍCIO 1 ================================*/
console.log('\n------------------- Exercício 1 ------------------------------\n')

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

console.log('Bem-vinda, ' + info.personagem);

/*================================ EXERCÍCIO 2 ================================*/
console.log('\n------------------- Exercício 2 ------------------------------\n')

info['recorrente'] = 'sim';

console.log(info);

/*================================ EXERCÍCIO 3 ================================*/
console.log('\n------------------- Exercício 3 ------------------------------\n')


for (let key in info) {
    console.log(key);
}

/*================================ EXERCÍCIO 4 ================================*/
console.log('\n------------------- Exercício 4 ------------------------------\n')

for (let key in info) {
    console.log(info[key]);
}





let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };

for (let index in info) {
    if (index === 'recorrente' && info.index === "Sim" && info2.index === 'sim') {
        console.log('Ambos recorrentes')
    } else {
        console.log(info[index] + ' e ' + info2[index]);
    }
}

/*================================ EXERCÍCIO 6 ================================*/
console.log('\n------------------- Exercício 6 ------------------------------\n')

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
  console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0]['titulo']);

/*================================ EXERCÍCIO 7 ================================*/
console.log('\n------------------- Exercício 7 ------------------------------\n')


leitor.livrosFavoritos.push(
    {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
    },
); 
console.log(leitor);

/*================================ EXERCÍCIO 7 ================================*/
console.log('\n------------------- Exercício 7 ------------------------------\n')

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos');