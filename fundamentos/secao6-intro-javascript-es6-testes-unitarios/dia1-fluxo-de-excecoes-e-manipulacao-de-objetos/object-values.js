/* ================= Exemplo 6 Object.values =================== */
console.log('\n----- Exemplo 6 Object.values -----\n')

// Listando somente os valores de um object
const coolestTvShow = {
    name: 'BoJack Horseman',
    genre: 'adult animation',
    createdBy: 'Raphael Bob-Waksberg',
    favoriteCharacter: 'Princess Carolyn',
    quote: 'Princess Carolyn always lands on her feet.',
    seasons: 6,
};

console.log(Object.values(coolestTvShow));

// Outro exemplo
const student = {
    html: 'Muito Bom',
    css: 'Bom',
    javascript: 'Ótimo',
    softskill: 'Ótimo',
};

const objectValues = (student) => {
    return Object.values(student);
};

console.log(objectValues(student));