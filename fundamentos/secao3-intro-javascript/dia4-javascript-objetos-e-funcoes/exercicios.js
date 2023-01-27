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