const num1 = 30;
const num2 = 22;
const num3 = 78;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log((num1 + num2) % 2 == 0);

/*if (num1 > num2) {
    console.log(num1);
}
else if (num1 < num2) {
    console.log(num2);
}*/

/*if (num1 > num2 && num1 > num3) {
    console.log(num1);
}

else if (num2 > num1 && num2 > num3) {
    console.log(num2);
}

else if (num3 > num1 && num3 > num2) {
    console.log(num3);
}*/

if (num1 > 0) {
    console.log("positive");
}
else if (num1 < 0) {
    console.log("negative");
}
else {
    console.log("zero");
}

const ang1 = 60;
const ang2 = 90;
const ang3 = 30;

let sum = ang1 + ang2 + ang3;
let positiveAngs = ang1 > 0 && ang2 > 0 && ang3 > 0;

if (positiveAngs && sum) {
    console.log(true);
}
else {
    console.log(false);
}

const percentage = 90;

if (percentage < 0 || percentage > 100) {
    console.error("porcentagem inválida")
}

else if (percentage >= 90) {
    console.log("A")
}
else if (percentage >=80) {
    console.log("B")
}
else if (percentage >=70) {
    console.log("C")
}
else if (percentage >=60) {
    console.log("D")
}
else if (percentage >=50) {
    console.log("E")
}
else {
    console.log("F")
}

const numero1 = 31;
const numero2 = 23;
const numero3 = 11;

if (numero1 % 2 == 0 || numero2 % 2 == 0 || numero3 % 2 == 0) {
    console.log(true);
}
else {
    console.log(false);
}

const custo = 14;
const venda = 56;
const imposto = 0.20;

if (custo < 0 || venda < 0) {
    console.error("valor de entrada menor que zero");
    return;
}

const valorCustoTotal = custo + imposto;
const lucro = venda - valorCustoTotal;
const lucroTotal = lucro * 1000;

console.log(lucroTotal);



const bruto = 5000;
const aliquota = 0.11;
const base = 4450;
const ir = 0.225;

let liquido = base - 365.12;

console.log(liquido);
