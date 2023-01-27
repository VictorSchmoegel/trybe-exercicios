/*================================= EXEMPLO 1 =================================*/
console.log('\n-------------------- Exemplo 1 ------------------------------\n')

let singer = {
    name1: "Milton",
    lastName: "Nascimento",
    nickname: "Bituca",
    age: 77,
    bestAlbuns: ["Travessia", "Clube da Esquina", "Minas"],
};

console.log(singer["Milton"]);

/*================================= EXEMPLO 2 =================================*/
console.log('\n-------------------- Exemplo 2 ------------------------------\n')

let player = {
    namePlayer: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    }
};

console.log('A jogadora ' + player.namePlayer + ' ' +  player.lastName + ' tem ' + player.age + ' anos de idade');

 player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

 console.log('A jogadora ' + player['namePlayer'] + ' ' + player['lastName'] + ' foi eleita a melhor do mundo por ' + player['bestInTheWorld'].length + ' vezes');

 console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata');

 /*================================= EXEMPLO 3 =================================*/
 console.log('\n-------------------- Exemplo 3 ------------------------------\n')

 let cars = ['saab', 'volvo' , 'bmw'];

 for (let index in cars) {
    console.log(index, cars[index]);
 }

 let car = {
    type: 'fiat',
    model: '500',
    color: 'white',
 };

 for (let index in car) {
    console.log(index, car[index]);
 }

 let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge'
 };

 for (let index in names) {
    console.log('Olá ' +  names[index]);
 }

 let carro = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let i in carro) {
    console.log(i, carro[i]);
  }
  
/*================================= EXEMPLO 4 =================================*/
 console.log('\n------------------- Exemplo 4 ------------------------------\n')

let a = 3;
let b = 4;

function sum(a, b) {
   return a + b;
}
function sub(a, b) {
   return a - b;
}
function mult(a, b) {
   return a * b;
}
function div(a, b) {
   return a / b;
}
function mod(a, b) {
   return a % b;
}
console.log(sum(a, b));
console.log(sub(a, b));
console.log(mult(a, b));
console.log(div(a, b));
console.log(mod(a, b));

let primeiroNum = 4;
let segundoNum = 6;

function maiorNum(primeiroNum , segundoNum) {
   if (primeiroNum > segundoNum) {
      return primeiroNum + ' é maior que ' + segundoNum;
   } else {
      return segundoNum + ' é maior que ' + primeiroNum;
   }
}
console.log(maiorNum(primeiroNum, segundoNum));

const num1 = 5;
const num2 = 10;
const num3 = 15;

function maiorNum1(num1, num2, num3) {
   if (num1 > num2 && num1 > num3) {
      return num1;
   } else if (num2 > num1 && num2 > num3) {
      return num2;
   } else {
      return num3;
   }
}
console.log(maiorNum1(num1, num2, num3));


const numero1 = 5;

function positivoNegativo(numero1) {
   if (numero1 > 0) {
      return 'positive';
   } else if (numero1 < 0) {
      return 'negative';
   } else {
      return 'zero';
   }
}
console.log(positivoNegativo(numero1));

const angulo1 = 60;
const angulo2 = 60;
const angulo3 = 60;

function triangulo(angulo1, angulo2, angulo3) {
   if (angulo1 + angulo2 + angulo3 === 180) {
      return true;
   } else {
      return false;
   }
}
if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
   console.log('Erro: ângulo inválido');
}
console.log(triangulo(angulo1, angulo2, angulo3));