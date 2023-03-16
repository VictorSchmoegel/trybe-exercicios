// O for/of permite criar loops em objetos iteráveis como strings, arrays, entre outros. De todo modo, o conteúdo a seguir irá focar somente nesses dois!

let numeros = [1,2,3,4,5];
for(let numero of numeros) {
  console.log(numero);
}

// Simples, certo? O laço for/of permite iterar os valores das propriedades e retorna os números dentro do array numeros. Outro exemplo:

let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}
// resultado:
// "H"
// "e"
// "l"
// "l"
// "o"

// Por fim, com o for/of, é possível somar um valor a cada elemento do array e retorná-lo da seguinte forma:

let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}
// 11
// 21
// 31

// Utilize o for/of para imprimir os elementos da lista names com o console.log():

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let nomes of names) {
    console.log(nomes);
}