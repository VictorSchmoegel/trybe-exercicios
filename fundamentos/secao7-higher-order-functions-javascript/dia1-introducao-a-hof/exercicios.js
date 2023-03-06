/* ============================== Parte I -  ================================ */
console.log('\n---------- Exercicio 1 - Nova pessoa encontrada ----------\n')


const minhaFuncao = (nomeCompleto) => {
    const email = nomeCompleto.toLowerCase().replace(' ', '_');
    return {
        nomeCompleto,
        email: `${email}@trybe.com`,
    };
};

const newEmployees = (callBack) => {
    const employees = {
        id1: callBack('Pedro Guerra'), 
        id2: callBack('Luiza Drumond'), 
        id3: callBack('Carla Paiva'), 
    }
    return employees;
};

console.log(newEmployees(minhaFuncao));

/* ============================== Parte I -  ================================ */
console.log('\n---------- Exercicio 2 - Sorteador de loteria ----------\n')

const checkNumber = (number1, number2) => number1 === number2;

const randomNumber = (number1, callBack) => {
    const number = Math.floor((Math.random() * 5) + 1);
    
    if(callBack(number1, number)) {
        return 'Parabéns, você ganhou'
    } else {
        return 'perdeu'
    }
};
console.log(randomNumber(1, checkNumber));

/* ============================== Parte I -  ================================ */
console.log('\n---------- Exercicio 3 - Corretor automático ----------\n')


const arr1 = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const arr2 = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const comparaArrays = (gabarito, aluno) => {
    if(gabarito === aluno) {
        return 1;
    } else if(gabarito === 'N.A') {
        return 0;
    } else {
        return -0.5;
    }
};

const contarPonto = (arr1, arr2, soma) => {
    let valores = 0;
    for (let index = 0; index < arr1.length; index += 1) {
        const compare = soma(arr1[index], arr2[index]);
        valores += compare;
    };
    return `${valores} pontos`;
};

console.log(contarPonto(arr1, arr2, comparaArrays));
