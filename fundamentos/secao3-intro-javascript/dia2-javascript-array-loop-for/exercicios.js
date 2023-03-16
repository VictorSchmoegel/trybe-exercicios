// Considere esse array para realizar os próximos exercícios.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let maiorNum = numbers[0];
let valorImpar = 0;
let menorNum = numbers[0];

// Percorra o array imprimindo todos os valores contidos nele com a função console.log().

for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
};
console.log(soma);
console.log(soma / numbers.length);

if (soma > 20) {
    console.log(`Valor maior que 20`);
} else {
    console.log(`Valor menor ou igual a 20`);
}

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > maiorNum) {
        maiorNum = numbers[i]
    }
}
console.log(maiorNum);

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        valorImpar += 1;
    }
}

if (valorImpar === 0) {
    console.log('nenhum valor impar encontrado');
} else {
    console.log(valorImpar);
}

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < menorNum) {
        menorNum = numbers[i]
    }
}
console.log(menorNum);

let divisao = 0


// Criando um algoritimo que imprima o fatorial de 10

let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
    fatorial *= index;
}
console.log(fatorial);

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];
let menorPalavra = array[0];

for (index = 0; index < array.length; index += 1) {
    if (array[index].length > maiorPalavra.length) {
        maiorPalavra = array[index]
    }
}

for (index = 0; index < array.length; index += 1) {
    if (array[index].length < menorPalavra.length) {
        menorPalavra = array[index]
    }
}

console.log(maiorPalavra);
console.log(menorPalavra);