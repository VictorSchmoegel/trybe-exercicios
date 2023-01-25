/*let pizzas = ["4 Queijos", "Frango com Catupiry", "marguerita", "Palmito", "chocolate"];

pizzas.push("Peperoni");


for (let index = 0; index < pizzas.length; index += 1) {
    console.log(pizzas[index]);
}*/

/*let tasksList = ["tomar cafe", "reunião", "brincar com o cachorro"];*/

//console.log(tasksList.length);

/*let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask); PRIMEIRO VALOR DA LISTA */

/*let searchForFirstTask = tasksList[tasksList.length - 1];
console.log(searchForFirstTask); ULTIMO VALOR DA LISTA */

/*tasksList.push("fazer exercicios Trybe");
console.log(tasksList); ACRESCENTA ALGO NO FINAL DA LISTA */

/*tasksList.unshift("comer pizza");
console.log(tasksList); ACRESCENTE ALGO NO INICIO DA LISTA */

/*tasksList.pop();
console.log(tasksList); EXCLUI O ULTIMO DA LISTA */

/*tasksList.shift();
console.log(tasksList); EXCLUI O PRIMEIRO DA LISTA */

/*let indexOfTask = tasksList.indexOf("reunião");
console.log(indexOfTask); RETORNA O VALOR DO ITEM DA LISTA */

/*let menu = ["home", "serviços", "portifolio", "links"];
let menuServices = menu[1];

console.log(menuServices);
 
let indexOfPortifolio = menu.indexOf("portifolio");

console.log(indexOfPortifolio);

menu.push("contato");

console.log(menu);*/


/*let numero = 5;

for (let contador = 1; contador <= 9; contador++) {
    console.log("");
    console.log(numero * contador);
}

let listaDeNomes = ["Joana", "Maria", "Lucas"];
for (let indice =0; indice < listaDeNomes.length; indice += 1) {
    let mensagem = "Boas vindas, " + listaDeNomes[indice] + "!";
    console.log(mensagem)
}*/

/*let groceryList = ["Arroz", "Feijão", "Alface", "Melancia"];
for (let index = 0; index < groceryList.length; index += 1) {
    const element = groceryList[index];
    console.log(element);
}*/


/*let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let index of names) {
    console.log(index);
}*/

/* ======== Exercício 1 - Lidando com Arrays ======== */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
let mediaArit = 0;
let maiorNum = 0;
let valorImpar = 0;
let menorNum = numbers[0];
let array25 = [];
let valorPor2 = 0;


// Percorrendo Array
for (let index = 0; index < numbers.length; index += 1)
console.log(numbers[index]);

console.log("");

// Somando valores do Array
for (let index = 0; index <numbers.length; index += 1) {
    result += numbers[index];
}
console.log(result);

console.log("");

// Média aritimética do Array
for (let index = 0; index < numbers.length; index += 1) {
    resultMediaArit = (result / numbers.length);
}

console.log(resultMediaArit);

console.log("");

// Imprimindo mensagem do valor

if (resultMediaArit > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}

console.log("");

// Descobrindo qual o maior valor do Array

for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] > maiorNum) {
        maiorNum = numbers[index];
    }
}
console.log(maiorNum);

console.log("");

// Descobrindo quantidade de valores ímpar

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        valorImpar += 1;
    }
}
if (valorImpar === 0) {
    console.log("nenhum valor ímpar encontrado");
} else {
    console.log(valorImpar);
}

console.log("");

// Descobrindo o menor valor

for (let index = 1; index < numbers.length; index += 1){
    if (numbers[index] < menorNum) {
        menorNum = numbers[index];
    }
}
console.log(menorNum);

console.log("");

// Criando uma array com for e imprimindo o resultado por 2

for (let index = 0; index <= 25; index += 1){
    array25.push(index);
}

console.log(array25);

for (let index = 0; index < array25; index += 1){
    console.log(array25[index] / 2);
}