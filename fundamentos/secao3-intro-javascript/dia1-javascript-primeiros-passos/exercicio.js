/*================================ EXERCÍCIO 01 ================================*/
console.log('\n------------------- Exercício 01 -------------------\n')

let a = 133;
let b = 20;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

/*================================ EXERCÍCIO 02 ================================*/
console.log('\n------------------- Exercício 02 -------------------\n')

let num1 = 30;
let num2 = 78;

if (num1 > num2) {
    console.log(num1 + ' é maior que o ' + num2)
} else if (num2 > num1) {
    console.log(num2 + ' é maior que o ' + num1)
}

/*================================ EXERCÍCIO 03 ================================*/
console.log('\n------------------- Exercício 03 -------------------\n')

const p = 564;
const m = 645;
const n = 952;

if (p > m && p > n) {
    console.log('O maior número é o ' + p)
} else if (m > p && m > n) {
    console.log('O maior número é o ' + m)
} else {
    console.log('O maior número é o ' + n)
}

/*================================ EXERCÍCIO 04 ================================*/
console.log('\n------------------- Exercício 04 -------------------\n')

let valor = 12;

if (valor > 0) {
    console.log('Positive')
} else if (valor < 0) {
    console.log('Negative')
}
else {
    console.log('Zero')
}

/*================================ EXERCÍCIO 05 ================================*/
console.log('\n------------------- Exercício 05 -------------------\n')

let ang1 = 60;
let ang2 = 30;
let ang3 = 70;
let sum = ang1 + ang2 + ang3

if (sum == 180) {
    console.log(true)
} else {
    console.log(false)
}

/*================================ EXERCÍCIO 06 ================================*/
console.log('\n------------------- Exercício 06 -------------------\n')



/*================================ EXERCÍCIO 07 ================================*/
console.log('\n------------------- Exercício 07 -------------------\n')

let percentage = 74;

if (percentage < 0 && percentage > 100) {
    console.log('Erro')
} else if (percentage >= 90) {
    console.log('A')
} else if (percentage >= 80) {
    console.log('B')
} else if (percentage >= 70) {
    console.log('C')
} else if (percentage >= 60) {
    console.log('D')
} else if (percentage >= 50) {
    console.log('E')
} else {
    console.log('F')
}

/*================================ EXERCÍCIO 08 ================================*/
console.log('\n------------------- Exercício 08 -------------------\n')

let numero1 = 32;
let numero2 = 15;
let numero3 = 98;

if (numero1 % 2 == 0 || numero2 % 2 == 0 || numero3 % 2 == 0) {
    console.log(true)
} else {
    console.log(false)
}

/*================================ EXERCÍCIO 09 ================================*/
console.log('\n------------------- Exercício 09 -------------------\n')

let number1 = 32;
let number = 15;
let number3 = 98;

if (numero1 % 2 !== 0 || numero2 % 2 !== 0 || numero3 % 2 !== 0) {
    console.log(true)
} else {
    console.log(false)
}

/*================================ EXERCÍCIO 10 ================================*/
console.log('\n------------------- Exercício 10 -------------------\n')

let custo = 380;
let venda = 900;
let imposto = 0.20;
let lucro = (custo * imposto + custo)
let lucroTotal = venda - lucro

if (custo < 0 || venda < 0) {
    console.log('Erro')
} else {
    console.log(lucroTotal * 1000)
}

/*================================ EXERCÍCIO 11 ================================*/
console.log('\n------------------- Exercício 11 -------------------\n')

let inss;
let ir;
let trybe;
const bruto = 3000

if (bruto >= 3000) {
    trybe = bruto * 0.17
}

if (bruto <= 1556.94) {
   inss = bruto * 0.08
} else if (bruto >= 1556.95 || bruto <= 2594.92) {
    inss = bruto * 0.08
} else if (bruto >= 2594.93 || bruto <= 5189.82) {
    inss = bruto * 0.08
} else if (bruto >= 5189.83) {
    inss == 570.88
}

let base = bruto - inss

if (base <= 1903.98) {
    ir = base * 1
} else if (base >= 1903.99 || base <= 2826.65) {
    ir = (base * 0.075) - 142.80
} else if (base >= 2826.66 || base <= 3751.05) {
    ir = (base * 0.15) - 354.80
} else if (base >= 3751.06 || base <= 4664.68) {
    ir = (base * 0.225) - 636.13
} else if (base > 4664.68) {
    ir = (base * 0.275) - 869.36
}