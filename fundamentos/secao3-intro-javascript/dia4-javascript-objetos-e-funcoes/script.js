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

let primeiroNum = 4;
let segundoNum = 6;

function maiorNum(primeiroNum , segundoNum) {
   if (primeiroNum > segundoNum) {
      return primeiroNum + ' é maior que ' + segundoNum;
   } else {
      return segundoNum + ' é maior que ' + primeiroNum;
   }
}
   