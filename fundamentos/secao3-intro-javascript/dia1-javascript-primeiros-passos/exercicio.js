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

