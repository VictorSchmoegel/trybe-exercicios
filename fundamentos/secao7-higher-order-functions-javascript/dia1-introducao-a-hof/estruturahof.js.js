// A primeira parte de uma HOF é o array a ser iterado e a HOF a ser executada. Por exemplo:

array.hofASerExecutada();

// A HOF recebe como parâmetro uma função callback.
// uma função callback é uma função passada por parâmetro ou executada dentro de outra função. Nesse caso, vamos passar uma função anônima:

array.hofASerExecutada(() => {});

// A função anônima que foi passada por parâmetro pode receber até três parâmetros: o primeiro parâmetro é o elemento a ser iterado e é o único obrigatório; o segundo parâmetro é o index do elemento atual; o terceiro parâmetro é o array original e não é muito comum utilizá-lo.

// O código abaixo possui um array com diversos valores. Observe e execute o código:

const arrayOfValues = ['José', 50, 0.25, { comida: 'Chocolate'}];

arrayOfValues.forEach((element, index) => {
    console.log(`O elemento atual é: ${element} e possui o index: ${index}`);
});