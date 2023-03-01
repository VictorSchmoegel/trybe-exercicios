/* ================= Exemplo 5 Object.keys =================== */
console.log('\n----- Exemplo 5 Object.keys -----\n')

// Listando somente as chaves de um objeto

const coolestTvShow = {
    name: 'BoJack Horseman',
    genre: 'adult animation',
    createdBy: 'Raphael Bob-Waksberg',
    favoriteCharacter: 'Princess Carolyn',
    quote: 'Princess Carolyn always lands on her feet.',
    seasons: 6,
};

for (const key in coolestTvShow) {
    console.log(key);
}

// O Object.keys, como o próprio nome diz, é utilizado para listar as chaves de um objeto, retornando-as em um array de strings.

console.log(Object.keys(coolestTvShow));

// Criando uma função que exiba as habilidades do objeto student
const student1 = {
    html: 'Muito Bom',
    css: 'Bom',
    javascript: 'Ótimo',
    softskills: 'Ótimo',
};
  
  const student2 = {
    html: 'Bom',
    css: 'Ótimo',
    javascript: 'Ruim',
    softskills: 'Ótimo',
    git: 'Bom', // chave adicionada
};

const listskills = (student) => {
    const arrayOfSkills = Object.keys(student);
    for (const index in arrayOfSkills) {
        console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
    }
};

console.log(student1);
listskills(student1);

console.log(student2);
listskills(student2);